/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { fromEvent, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { map } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class RafService {

	constructor() {

	}

	raf$() {
		return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(
			// shareReplay()
		);
	}

	windowRect$() {
		return fromEvent(window, 'resize').pipe(
			map(x => new Rect({
				width: window.innerWidth,
				height: window.innerHeight
			})),
			// shareReplay()
		);
	}

	scroll$() {
		const target = document.querySelector('body');
		return fromEvent(target, 'scroll').pipe(
			map(x => target.scrollY || target.scrollTop),
			// shareReplay()
		);
	}

	static factory() {
		return new RafService();
	}

}

RafService.factory.$inject = [];
