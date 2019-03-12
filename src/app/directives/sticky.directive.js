/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { tap } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class StickyDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const subscription = this.scroll$(element, attributes).subscribe();
		scope.$on('destroy', () => {
			subscription.unsubscribe();
		});
	}

	scroll$(element, attributes) {
		const node = element[0];
		const dataset = node.dataset;
		const content = node.querySelector('[sticky-content]');
		const stickyTop = parseInt(attributes.sticky) || 0;
		// const target = document.querySelector('body');
		// const source = fromEvent(target, 'scroll');
		return this.domService.scrollAndRect$().pipe(
			tap(top => {
				let rect = Rect.fromNode(node);
				// const maxtop = node.offsetHeight - content.offsetHeight;
				// top = Math.max(0, Math.min(maxtop, top - rect.top));
				const maxTop = Math.max(0, stickyTop - rect.top);
				content.setAttribute('style', `transform: translateY(${maxTop}px);`);
				const sticky = maxTop > 0;
				if (sticky !== Boolean(dataset.sticky)) {
					dataset.sticky = sticky;
					if (sticky) {
						node.classList.add('sticky');
					} else {
						node.classList.remove('sticky');
					}
				}
			})
		);
	}

	static factory(DomService) {
		return new StickyDirective(DomService);
	}

}

StickyDirective.factory.$inject = ['DomService'];
