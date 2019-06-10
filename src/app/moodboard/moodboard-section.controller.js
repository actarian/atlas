/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class MoodboardSectionCtrl {

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
		Object.keys(this.filters).forEach(key => {
			const filter = this.filters[key];
			filter.options.forEach(option => {
				const value = {};
				value[key] = option.value;
				const q = this.locationService.getSerialization('filters', value);
				option.query = `?q=${q}`;
				// console.log(option.query, option.value);
			});
		});
	}

}

MoodboardSectionCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

export default MoodboardSectionCtrl;
