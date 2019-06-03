/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export const ITEMS_PER_PAGE = 9;

class MagazineCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.magazine = window.magazine || [];
		// !!! FAKE
		while (this.magazine.length < 100) {
			this.magazine = this.magazine.concat(this.magazine);
		}
		// !!! FAKE
		this.maxItems = 0;
		this.visibleItems = [];
	}

	onScroll(event) {
		if (event.rect.bottom < event.windowRect.bottom) {
			// console.log('more!');
			if (!this.busy && this.maxItems < this.magazine.length) {
				this.$timeout(() => {
					this.busy = true;
					this.$timeout(() => {
						this.maxItems += ITEMS_PER_PAGE;
						this.visibleItems = this.magazine.slice(0, this.maxItems);
						this.busy = false;
						// console.log(this.visibleItems.length);
					}, 1000);
				}, 0);
			}
		}
	}
}

MagazineCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default MagazineCtrl;
