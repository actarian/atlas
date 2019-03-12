/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { combineLatest, fromEvent, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { map, shareReplay, startWith } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class DomService {

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
			startWith(new Rect({
				width: window.innerWidth,
				height: window.innerHeight
			})),
			shareReplay()
		);
	}

	scroll$() {
		const target = document.querySelector('body');
		return fromEvent(target, 'scroll').pipe(
			map(x => target.scrollY || target.scrollTop),
			startWith(target.scrollY || target.scrollTop),
			shareReplay()
		);
	}

	scrollAndRect$() {
		return combineLatest(this.scroll$(), this.windowRect$()).pipe(
			shareReplay()
		);
	}

	static factory() {
		return new DomService();
	}

}

DomService.factory.$inject = [];
