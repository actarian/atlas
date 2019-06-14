/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class ParallaxDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const childNode = node.querySelector('img, video');
		if (childNode) {
			const style = window.getComputedStyle(node);
			const position = style.position;
			const parallax = (parseInt(attributes.parallax) || 5) * 2;
			const subscription = this.parallax$(node, parallax).subscribe(parallax => {
				if (position === 'absolute') {
					childNode.setAttribute('style', `top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%) scale(${parallax.s}, ${parallax.s});`);
				} else {
					childNode.setAttribute('style', `transform: translateX(0) translateY(${parallax.p+50}%) scale(${parallax.s}, ${parallax.s});`);
				}
			});
			element.on('$destroy', () => {
				subscription.unsubscribe();
			});
		}
	}

	units(value, decimals = 4) {
		const pow = Math.pow(10, decimals) / 10;
		return Math.round(value * pow) / pow;
	}

	parallax$(node, parallax) {
		return this.domService.rafAndRect$().pipe(
			map(datas => {
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				if (intersection.y > 0) {
					return Math.min(1, Math.max(-1, intersection.center.y)); // intersection.center.y;
				} else {
					return null;
				}
			}),
			filter(y => y !== null),
			distinctUntilChanged(),
			map(y => {
				const direction = 1; // i % 2 === 0 ? 1 : -1;
				const s = (100 + parallax * 2) / 100;
				const p = (-50 + (y * parallax * direction)); // .toFixed(3);
				// const y = Math.min(1, Math.max(-1, intersection.center.y));
				// const s = (100 + parallax * 2) / 100;
				// const p = (-50 + (y * parallax * direction)); // .toFixed(3);
				return { s: this.units(s), p: this.units(p) };
			})
		);
	}

	static factory(DomService) {
		return new ParallaxDirective(DomService);
	}

}

ParallaxDirective.factory.$inject = ['DomService'];
