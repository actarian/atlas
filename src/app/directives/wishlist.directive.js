/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class WishlistDirective {

	constructor(
		ApiService
	) {
		this.apiService = ApiService;
		this.restrict = 'E';
		this.scope = {
			item: '=',
		};
		this.template = `<div class="btn btn--wishlist" ng-class="{ added: item.added }" ng-click="onWishlist()">
				<svg class="icon icon--wishlist" ng-if="!item.added"><use xlink:href="#wishlist"></use></svg>
				<svg class="icon icon--wishlist" ng-if="item.added"><use xlink:href="#wishlist-added"></use></svg>
			</div>`;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		scope.item = scope.item || {};
		scope.onWishlist = () => {
			this.apiService.wishlist.toggle(scope.item).then((item) => {
				Object.assign(scope.item, item);
			}, (error) => console.log(error));
		};
		element.on('$destroy', () => {});
	}

	static factory(ApiService) {
		return new WishlistDirective(ApiService);
	}

}

WishlistDirective.factory.$inject = ['ApiService'];
