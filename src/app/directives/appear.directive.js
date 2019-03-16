/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';

import { map } from 'rxjs/operators';
import Rect from '../shared/rect';

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
		element.to = '';
		const subscription = this.appear$(element, attributes).subscribe(
			intersection => {
				if (intersection.y > 0.25) {
					if (element.to !== '') {
						return;
					}
					element.to = setTimeout(() => {
						node.classList.add('appeared');
					}, 100 * element.index); // (i - firstVisibleIndex));
				} else {
					/*
					if (element.to !== '') {
						clearTimeout(element.to);
						element.to = '';
					}
					if (node.classList.contains('appeared')) {
						node.classList.remove('appeared');
					}
					*/
				}
			}
		);
		element.on('$destroy', () => {
			subscription.unsubscribe();
		});
	}

	appear$(element, attributes) {
		const node = element[0];
		return this.domService.scrollAndRect$().pipe(
			map(datas => {
				const scrollTop = datas[0];
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				return intersection;
			})
		);
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
