import { first } from 'rxjs/operators';
import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'moodboard';

export const MOOD_TYPES = Object.freeze({
	Tile: 1,
	Horizontal: 2,
	Vertical: 3,
	Card: 4,
	Decor: 5
});

export const ITEMS_PER_PAGE = 20;

class MoodboardCtrl {

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
		this.filters = window.filters || {};
		this.filteredItems = [];
		this.initialFilters = window.initialFilters || null;
		this.moodTypes = MOOD_TYPES;
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
	}

	deserializeFilters() {
		const locationFilters = this.locationService.deserialize('filters') || this.initialFilters || {};
		// console.log('MoodboardCtrl.deserializeFilters', filters);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				default:
					filter.doFilter = (item, value) => {
						// console.log(item, value);
						this.applyFilters(item, value);
					};
			}
			filter.options.unshift({
				label: filter.placeholder,
				value: null,
			});
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
			filter.value = selectedOption.value;
			filter.placeholder = selectedOption.label;
			// console.log(x, filters[x], filter.value);
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
		// console.log('MoodboardCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(serialize) {
		// console.log('MoodboardCtrl.applyFilters', this.filters);
		if (serialize !== false) this.serializeFilters();
		var me = this;
		const filters = {};
		let anyFilter = false;
		Object.keys(this.filters).map(key => {
			const v = me.filters[key].value;
			if (v !== null) {
				filters[key] = v;
				anyFilter = true;
			}
		});
		if (anyFilter) {
			this.apiService.moodboard.filter(filters).pipe(
				first()
			).subscribe(
				success => {
					let items = success.data;
					this.filteredItems = [];
					this.visibleItems = [];
					this.maxItems = ITEMS_PER_PAGE;
					this.$timeout(() => {
						this.filteredItems = items;
						this.visibleItems = items.slice(0, this.maxItems);
					}, 50);
				},
				error => console.log('MoodboardCtrl.applyFilters.error', error)
			);
		}

		GtmService.pageViewFilters(GTM_CAT, this.filters);
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

MoodboardCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

export default MoodboardCtrl;
