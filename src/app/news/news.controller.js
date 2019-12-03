/* jshint esversion: 6 */

export const ITEMS_PER_PAGE = 9;

import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'news';

class NewsCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.news = window.news || [];
		this.initialFilters = window.initialFilters || null;
		this.filteredItems = [];
		//// !!! FAKE
		//while (this.news.length < 100) {
		//	this.news = this.news.concat(this.news);
		//}
		//// !!! FAKE
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'categories':
					filter.doFilter = (item, value) => {
						return item.categoryId === value;
					};
					break;
				case 'years':
					filter.doFilter = (item, value) => {
						return item.year === value;
					};
					break;
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
		const { filteredItems } = this.getFilteredItems(this.news);
		// console.log(filteredItems, filters);
		this.filteredItems = [];
		this.visibleItems = [];
		this.maxItems = ITEMS_PER_PAGE;
		this.$timeout(() => {
			this.filteredItems = filteredItems;
			this.visibleItems = filteredItems.slice(0, this.maxItems);
			this.updateFilterStates(this.news);
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

	onScroll(event) {
		if (event.rect.bottom < event.windowRect.bottom) {
			// console.log('more!');
			if (!this.busy && this.maxItems < this.filteredItems.length) {
				this.$timeout(() => {
					this.busy = true;
					this.$timeout(() => {
						this.maxItems += ITEMS_PER_PAGE;
						this.visibleItems = this.filteredItems.slice(0, this.maxItems);
						this.busy = false;
						// console.log(this.visibleItems.length);
					}, 1000);
				}, 0);
			}
		}
	}
}

NewsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default NewsCtrl;
