/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class MediaDirective {

	constructor(
		ApiService
	) {
		this.apiService = ApiService;
		this.restrict = 'A';
		this.transclude = true;
		this.template = `<div class="media">
	<ng-transclude></ng-transclude>
</div>
<div class="overlay" ng-click="onOverlay()"></div>
<div class="btn btn--wishlist" ng-class="{ added: item.added }" ng-click="onWishlist()">
	<svg class="icon icon--wishlist" ng-if="!item.added"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="item.added"><use xlink:href="#wishlist-added"></use></svg>
</div>`;
		this.scope = {
			item: '=?media',
		};
	}

	link(scope, element, attributes, controller) {
		scope.item = scope.item || {};
		scope.onWishlist = () => {
			this.apiService.wishlist.toggle(scope.item).then((item) => {
				Object.assign(scope.item, item);
			}, (error) => console.log(error));
		};
		element.on('$destroy', () => {});
	}

	static factory(ApiService) {
		return new MediaDirective(ApiService);
	}

}

MediaDirective.factory.$inject = ['ApiService'];
