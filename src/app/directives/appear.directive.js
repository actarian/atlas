/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

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
		const dataset = node.dataset;
		const section = this.getSection(node);
		dataset.index = [].slice.call(section.querySelectorAll('[appear]')).indexOf(node);
		dataset.to = '';
		const subscription = this.appear$(element, attributes).subscribe(
			intersection => {
				if (intersection.y > 0.35) {
					if (dataset.to !== '') {
						return;
					}
					dataset.to = setTimeout(() => {
						node.classList.add('appeared');
					}, 150 * dataset.index); // (i - firstVisibleIndex));
				} else {
					/*
					if (dataset.to !== '') {
						clearTimeout(dataset.to);
						dataset.to = '';
					}
					if (node.classList.contains('appeared')) {
						node.classList.remove('appeared');
					}
					*/
				}
			}
		);
		scope.$on('destroy', () => {
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
