/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Rect from '../shared/rect';

export default class AppearDirective {

	constructor(
		RafService
	) {
		this.rafService = RafService;
		this.restrict = 'A';
		this.windowRect = new Rect({
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		});
		this.scroll$ = this.rafService.scroll$();
		this.windowRect$ = this.rafService.windowRect$();
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const section = this.getSection(node);
		this.index = [].slice.call(section.querySelectorAll('[appear]')).indexOf(node);
		const onScroll = (data) => {
			const rect = Rect.fromNode(node);
			const intersection = rect.intersection(this.windowRect);
			if (intersection.y > 0.0) {
				if (!this.to) {
					this.to = setTimeout(() => {
						node.classList.add('appeared');
					}, 150 * this.index); // (i - firstVisibleIndex));
				}
			} else {
				if (this.to) {
					clearTimeout(this.to);
					this.to = null;
				}
				if (node.classList.contains('appeared')) {
					node.classList.remove('appeared');
				}
			}
		};
		const windowRectSubscription = this.windowRect$.subscribe(x => this.windowRect = x);
		const scrollSubscription = this.scroll$.subscribe(onScroll);
		onScroll();
		scope.$on('destroy', () => {
			windowRectSubscription.unsubscribe();
			scrollSubscription.unsubscribe();
		});
	}

	getSection(node) {
		let section = node.parentNode;
		let p = node;
		while (p) {
			p = p.parentNode;
			if (p && p.classList && p.classList.contains('section')) {
				section = p;
				p = null;
			}
		}
		return section;
	}

	static factory(RafService) {
		return new AppearDirective(RafService);
	}

}

AppearDirective.factory.$inject = ['RafService'];
