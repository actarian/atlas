

import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'references';

class ReferencesCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.references = window.references || [];
		this.initialFilters = window.initialFilters || null;
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'collections':
					filter.doFilter = (item, value) => {
						return item.collections.indexOf(value) !== -1;
					};
					break;
				case 'countries':
					filter.doFilter = (item, value) => {
						return item.countryId === value;
					};
					break;
				default:
					filter.doFilter = (item, value) => {
						return item.features.indexOf(value) !== -1;
					};
			}
			filter.options.unshift({
				label: this.filters[x].placeholder,
				value: null,
			});
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
			filter.value = selectedOption.value;
			filter.placeholder = selectedOption.label;
		});
		return filters;
	}

	serializeFilters() {
		let filters = {};
		let any = false;
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			if (filter.value !== null) {
				filters[x] = filter.value;
				any = true;
			}
		});
		if (!any) {
			filters = this.initialFilters ? {} : null;
		}
		// console.log('ReferenceCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(serialize) {
		if (serialize !== false) this.serializeFilters();
		const { filteredItems } = this.getFilteredItems(this.references);
		this.filteredReferences = [];
		this.$timeout(() => {
			this.filteredReferences = filteredItems;
			this.updateFilterStates(this.references, filteredItems);
			// delayer for image update
		}, 50);
		GtmService.pageViewFilters(GTM_CAT, this.filters);
	}

	getFilteredItems(items, skipFilter) {
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		let filteredItems = items.slice();
		if (filters.length) {
			filteredItems = filteredItems.filter(item => {
				let has = true;
				filters.forEach(filter => {
					if (filter !== skipFilter) {
						has = has && filter.doFilter(item, filter.value);
					}
				});
				return has;
			});
		}
		return { filteredItems };
	}

	updateFilterStates(items) {
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			const { filteredItems } = this.getFilteredItems(items, filter);
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < filteredItems.length && !has) {
						const item = filteredItems[i];
						has = filter.doFilter(item, option.value);
						i++;
					}
				} else {
					has = true;
				}
				option.disabled = !has;
			});
		});
	}

	setFilter(item, filter) {
		item = item || filter.options[0];
		filter.value = item.value;
		filter.placeholder = item.label;
		this.applyFilters();
		this.$scope.$broadcast('onCloseDropdown');
	}

	removeFilter(filter) {
		this.setFilter(null, filter);
	}

}

ReferencesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default ReferencesCtrl;
