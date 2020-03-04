import { finalize, first, map } from 'rxjs/operators';
import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'search';

class SearchCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService,
		ApiService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.apiService = ApiService;
		this.model = {};
		this.busy = false;
		this.error = null;
		this.items = [];
		this.filters = window.filters || {};
		this.initialFilters = window.initialFilters || null;
		this.deserializeFilters(this.initialFilters);
		this.model.query = this.locationService.deserialize('query');
		this.onSubmit();
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'types':
					filter.doFilter = (item, value) => {
						return item.type === value;
					};
					break;
			}
			/*
			filter.options.unshift({
				label: this.filters[x].placeholder,
				value: null,
			});
			*/
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
			filter.value = selectedOption ? selectedOption.value : null;
			filter.placeholder = selectedOption ? selectedOption.label : null;
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
		const { filteredItems } = this.getFilteredItems(this.items);
		this.filteredSearch = [];
		this.$timeout(() => {
			this.filteredSearch = filteredItems;
			this.updateFilterStates(this.items, filteredItems);
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

	onSubmit() {
		const query = this.model.query;
		if (query && query.trim().length > 0) {
			this.error = null;
			this.busy = true;
			this.locationService.serialize('query', query);
			GtmService.pageViewFilters(GTM_CAT, query);
			this.apiService.search(query).pipe(
				first(),
				map(success => {
					const items = success.data;
					// items.forEach(item => item.categoryName = this.filters.types.options.find(x => x.value === item.type).label);
					return items;
				}),
				finalize(() => this.busy = false)
			).subscribe(
				items => {
					this.items = items;
					this.applyFilters(false);
				},
				error => console.log('SearchCtrl.apiService.search.error', error)
			);
		}
	}

}

SearchCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

export default SearchCtrl;
