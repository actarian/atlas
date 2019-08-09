/* jshint esversion: 6 */

export const ITEMS_PER_PAGE = 9;

import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'gallerie';

class GalleriesCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.galleries = window.galleries || [];
		this.initialFilters = window.initialFilters || null;
		this.filteredItems = [];
		// !!! FAKE
		//if (this.galleries.length > 0) {
		//	while (this.galleries.length < 100) {
		//		this.galleries = this.galleries.concat(this.galleries);
		//	}
		//}
		// !!! FAKE
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'collections': // probabilmente verrà aggiunto
					filter.doFilter = (item, value) => {
						return item.id === value;
					};
					break;
				default:
					filter.doFilter = (item, value) => {
						return item.features.indexOf(value) !== -1;
					};
			}
			filter.options.unshift({
				label: filter.placeholder,
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
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		let filteredItems = this.galleries.slice();
		// console.log(filteredItems);
		if (filters.length) {
			filteredItems = filteredItems.filter(reference => {
				let has = true;
				filters.forEach(filter => {
					has = has && filter.doFilter(reference, filter.value);
				});
				return has;
			});
		}
		// console.log(filteredItems, filters);
		this.filteredItems = [];
		this.visibleItems = [];
		this.maxItems = ITEMS_PER_PAGE;
		this.$timeout(() => {
			this.filteredItems = filteredItems;
			this.visibleItems = filteredItems.slice(0, this.maxItems);
			this.updateFilterStates(filteredItems);
			// delayer for image update
		}, 50);

		GtmService.pageViewFilters(GTM_CAT, this.filters);
	}

	updateFilterStates(galleries) {
		// console.log('updateFilterStates', galleries);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < galleries.length && !has) {
						const reference = galleries[i];
						has = filter.doFilter(reference, option.value);
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

GalleriesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default GalleriesCtrl;
