/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class ScrollDirective {

	// @Output() public scroll = new EventEmitter();

	constructor(
		DomService
	) {
		this.domService = DomService;
		// this.require = 'ngModel';
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const callback = scope.$eval(attributes.scroll);
		if (typeof callback === 'function') {
			const subscription = this.domService.scroll$().subscribe(event => callback(event));
			scope.$on('destroy', () => {
				subscription.unsubscribe();
			});
		}
	}

	static factory(DomService) {
		return new ScrollDirective(DomService);
	}

}

ScrollDirective.factory.$inject = ['DomService'];
