/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export const MOOD_TYPES = Object.freeze({
	Tile: 1,
	Horizontal: 2,
	Vertical: 3,
	Card: 4
});

class MoodboardCtrl {

	constructor(
		$scope,
		$timeout,
		ApiService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.apiService = ApiService;
		this.filters = window.filters || {};
		this.moodTypes = MOOD_TYPES;
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
				label: this.filters[x].placeholder,
				value: null,
			});
			filter.value = null;
		});
		this.applyFilters();
	}

	applyFilters(item, value) {
		// console.log('MoodboardCtrl.applyFilters', this.filters);
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		this.apiService.moodboard.filter(filters).subscribe(
			success => {
				let items = success.data;
				/* FAKE */
				while (items.length < 50) {
					items = items.concat(items);
				}
				items.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
				/* FAKE */
				this.items = [];
				this.$timeout(() => {
					this.items = items;
				}, 50);
			},
			error => console.log('MoodboardCtrl.applyFilters.error', error)
		);
	}

}

MoodboardCtrl.$inject = ['$scope', '$timeout', 'ApiService'];

export default MoodboardCtrl;
