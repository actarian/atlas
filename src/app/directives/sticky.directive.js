/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Rect from '../shared/rect';

export default class StickyDirective {

	constructor(
		RafService
	) {
		this.rafService = RafService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const content = node.querySelector('[sticky-content]');
		const stickyTop = parseInt(attributes.sticky) || 0;
		// const target = document.querySelector('body');
		// const source = fromEvent(target, 'scroll');
		const onScroll = (x) => {
			// const top = target.scrollY || target.scrollTop;
			// const subscription = this.rafService.raf$().subscribe(event => {
			let rect = Rect.fromNode(node);
			// const maxtop = node.offsetHeight - content.offsetHeight;
			// top = Math.max(0, Math.min(maxtop, top - rect.top));
			const top = Math.max(0, stickyTop - rect.top);
			content.setAttribute('style', `transform: translateY(${top}px);`);
			const sticky = top > 0;
			if (sticky !== this.sticky) {
				this.sticky = sticky;
				if (sticky) {
					node.classList.add('sticky');
				} else {
					node.classList.remove('sticky');
				}
			}
		};
		const subscription = this.rafService.scroll$().subscribe(onScroll);
		onScroll();
		scope.$on('destroy', () => {
			subscription.unsubscribe();
		});
	}

	static factory(RafService) {
		return new StickyDirective(RafService);
	}

}

StickyDirective.factory.$inject = ['RafService'];
