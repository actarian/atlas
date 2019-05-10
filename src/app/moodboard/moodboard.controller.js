/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export const MOOD_TYPES = Object.freeze({
	Tile: 1,
	Horizontal: 2,
	Vertical: 3,
	Card: 4
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
		this.moodTypes = MOOD_TYPES;
		this.deserializeFilters();
		this.applyFilters();
	}

	deserializeFilters() {
		const locationFilters = this.locationService.deserialize('filters') || {};
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
		const filters = {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			if (filter.value !== null) {
				filters[x] = filter.value;
			}
		});
		// console.log('MoodboardCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(item, value) {
		// console.log('MoodboardCtrl.applyFilters', this.filters);
		this.serializeFilters();
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		this.apiService.moodboard.filter(filters).subscribe(
			success => {
				let items = success.data;
				/* FAKE */
				while (items.length < 200) {
					items = items.concat(items);
				}
				items.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
				/* FAKE */
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
