/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class WishlistDirective {

	constructor(
		$timeout,
		WishlistService
	) {
		this.$timeout = $timeout;
		this.wishlistService = WishlistService;
		this.restrict = 'E';
		this.scope = {
			item: '=',
		};
		this.transclude = true;
		this.template = `<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
		<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
		<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
		<ng-transclude></ng-transclude>
	</div>`;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		scope.item = scope.item || {};
		scope.$watch(() => {
			return this.wishlistService.has(scope.item);
		}, (current, previous) => {
			// console.log(current, previous, node);
			if (scope.wishlistActive !== current) {
				scope.wishlistActive = current;
				if (current) {
					scope.wishlistActivated = true;
					this.$timeout(() => {
						scope.wishlistActivated = false;
					}, 2000);
				} else {
					scope.wishlistDeactivated = true;
					this.$timeout(() => {
						scope.wishlistDeactivated = false;
					}, 2000);
				}
			}
		});
		scope.onClickWishlist = (event) => {
			this.wishlistService.toggle(scope.item).then(
				(has) => {
					console.log('WishlistDirective.onClickWishlist', has);
				},
				(error) => {
					console.log(error);
				}
			);
			event.preventDefault();
			event.stopPropagation();
		};
		element.on('$destroy', () => {});
	}

	static factory($timeout, WishlistService) {
		return new WishlistDirective($timeout, WishlistService);
	}

}

WishlistDirective.factory.$inject = ['$timeout', 'WishlistService'];
