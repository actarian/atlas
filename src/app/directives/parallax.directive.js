/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Rect } from '../shared/rect';

export default class ParallaxDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		// this.require = 'ngModel';
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const image = element[0].querySelector('img');
		const subscription = this.parallax$().pipe(
			/*
			distinctUntilChanged((a, b) => {
				return a.p !== b.p;
			}),
			*/
		).subscribe(parallax => {
			// console.log(parallax);
			image.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
		});
		scope.$on('destroy', () => {
			subscription.unsubscribe();
		});
	}

	parallax$() {
		return this.domService.raf$().pipe(
			map(top => {
				const windowRect = new Rect({
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				});
				// this.windowRect;
				const node = this.elementRef.nativeElement;
				const parallax = (this.parallax || 5) * 2;
				const direction = 1; // i % 2 === 0 ? 1 : -1;
				let rect = Rect.fromNode(node);
				rect = new Rect({
					top: rect.top,
					left: rect.left,
					width: rect.width,
					height: rect.height,
				});
				const intersection = rect.intersection(windowRect);
				// console.log(intersection);
				if (intersection.y > 0) {
					const y = Math.min(1, Math.max(-1, intersection.center.y));
					const s = (100 + parallax * 2) / 100;
					const p = (-50 + (y * parallax * direction)); // .toFixed(3);
					return { s: s, p: p };
				} else {
					return null;
				}
			}),
			filter(x => x !== null)
		);
	}

	scrollTop$() {
		return this.domService.raf$().pipe(
			map(x => window.pageYOffset),
			distinctUntilChanged(),
			tap(x => console.log(x))
		);
	}

	static factory(DomService) {
		return new ParallaxDirective(DomService);
	}

}

ParallaxDirective.factory.$inject = ['DomService'];
