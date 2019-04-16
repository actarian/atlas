/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';

export default class AppearDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const section = this.getSection(node);
		element.index = [].slice.call(section.querySelectorAll('[appear]')).indexOf(node);
		const subscription = this.domService.appear$(node).subscribe(event => { // -0.05
			// console.log(event.rect.top);
			const rect = event.rect;
			const x = rect.left;
			const y = 0; // event.rect.top;
			const index = Math.floor(y / 320) * Math.floor(window.innerWidth / 320) + Math.floor(x / 320);
			const timeout = index * 50;
			if (index > 0) {
				setTimeout(() => {
					node.classList.add('appeared');
				}, timeout); // (i - firstVisibleIndex));
			} else {
				node.classList.add('appeared');
			}
		});
		element.on('$destroy', () => {
			subscription.unsubscribe();
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

	static factory(DomService) {
		return new AppearDirective(DomService);
	}

}

AppearDirective.factory.$inject = ['DomService'];
