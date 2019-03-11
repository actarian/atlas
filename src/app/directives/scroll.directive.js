/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { fromEvent } from 'rxjs';

export default class ScrollDirective {

	// @Output() public scroll = new EventEmitter();

	constructor() {
		// this.require = 'ngModel';
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		// console.log('ScrollDirective.link', element);
		// const source = fromEvent(element[0], 'scroll');
		const callback = scope.$eval(attributes.scroll);
		if (typeof callback === 'function') {
			// console.log(callback);
			const target = document.querySelector('body');
			const onScroll = (originalEvent) => {
				const event = {
					scrollHeight: target.scrollHeight,
					scrollLeft: target.scrollX || target.scrollLeft,
					scrollTop: target.scrollY || target.scrollTop,
					scrollWidth: target.scrollWidth,
					originalEvent: originalEvent,
				};
				// scope.$broadcast('onScrollDocumentEvent', event);
				callback(event);
				// console.log('ScrollDirective.onScrollDocumentEvent', event);
			}
			const source = fromEvent(target, 'scroll');
			const subscription = source.subscribe(onScroll);
			onScroll();
			scope.$on('destroy', () => {
				subscription.unsubscribe();
			});
		}
	}

	static factory() {
		return new ScrollDirective();
	}

}

ScrollDirective.factory.$inject = [];
