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

		if (Object.keys(locationFilters).length > 0) {
			setTimeout(() => {
				const filtersNode = document.querySelector('.section--filters');
				if (filtersNode) {
					this.scrollIntoView(filtersNode);
				}
			}, 150);
		}

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
		const { filteredItems } = this.getFilteredItems(this.galleries);
		this.filteredItems = [];
		this.visibleItems = [];
		this.maxItems = ITEMS_PER_PAGE;
		this.$timeout(() => {
			this.filteredItems = filteredItems;
			this.visibleItems = filteredItems.slice(0, this.maxItems);
			this.updateFilterStates(this.galleries);
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

	scrollIntoView(node) {
		const curtop = (document.body.scrollTop || document.documentElement.scrollTop);
		const top = curtop + node.getBoundingClientRect().top;
		window.scroll(0, top);
	}
}

GalleriesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default GalleriesCtrl;
