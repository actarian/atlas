/* jshint esversion: 6 */

import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'stores';

class StoresCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.stores = window.stores || [];
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
						return item.stato === value;
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
		// console.log('StoresCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(serialize) {
		if (serialize !== false) this.serializeFilters();
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		let filteredStores = this.stores.slice();
		// console.log(filteredStores);
		if (filters.length) {
			filteredStores = filteredStores.filter(store => {
				let has = true;
				filters.forEach(filter => {
					has = has && filter.doFilter(store, filter.value);
				});
				return has;
			});
		}
		// console.log(filteredStores, filters);
		this.filteredStores = [];
		this.$timeout(() => {
			this.filteredStores = filteredStores;
			this.updateFilterStates(filteredStores);
			// delayer for image update
		}, 50);

		GtmService.pageViewFilters(GTM_CAT, this.filters);
	}

	updateFilterStates(stores) {
		// console.log('updateFilterStores', stores);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < stores.length && !has) {
						const store = stores[i];
						has = filter.doFilter(store, option.value);
						i++;
					}
				} else {
					has = true;
				}
				option.disabled = !has;
			});
			// console.log(filter.options);
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

StoresCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default StoresCtrl;
