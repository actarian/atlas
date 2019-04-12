/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class MoodboardCtrl {

	constructor(
		$scope,
		$timeout
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
	}

}

MoodboardCtrl.$inject = ['$scope', '$timeout'];

export default MoodboardCtrl;
