/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class PictureDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'C';
		this.transclude = true;
		this.template = `<ng-transclude></ng-transclude>
		<div class="btn btn--wishlist" ng-class="{ added: item.added }" ng-click="onToggle()">
			<svg class="icon icon--wishlist" ng-if="!item.added"><use xlink:href="#wishlist"></use></svg>
			<svg class="icon icon--wishlist" ng-if="item.added"><use xlink:href="#wishlist-added"></use></svg>
		</div>`;
		this.scope = {
			item: '=?',
		};
	}

	link(scope, element, attributes, controller) {
		scope.item = scope.item || {};
		scope.onToggle = () => {
			scope.item.added = !scope.item.added;
		};
		scope.$on('destroy', () => {

		});
	}

	static factory(DomService) {
		return new PictureDirective(DomService);
	}

}

PictureDirective.factory.$inject = ['DomService'];
