/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { combineLatest, fromEvent, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { auditTime, map, shareReplay, startWith } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class DomService {

	constructor() {

	}

	get scrollTop() {
		return window.scrollY || window.scrollTop || 0;
	}

	get scrollLeft() {
		return window.scrollX || window.scrollLeft || 0;
	}

	raf$() {
		return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(
			shareReplay()
		);
	}

	rafAndRect$() {
		return combineLatest(this.raf$(), this.windowRect$()).pipe(
			shareReplay()
		);
	}

	windowRect$() {
		const windowRect = new Rect({
			width: window.innerWidth,
			height: window.innerHeight
		});
		return fromEvent(window, 'resize').pipe(
			map(originalEvent => {
				windowRect.width = window.innerWidth;
				windowRect.height = window.innerHeight;
				return windowRect;
			}),
			startWith(windowRect),
			shareReplay()
		);
	}

	scroll$() {
		const target = window; // document.querySelector('body');
		const event = {
			/*
			top: target.offsetTop || 0,
			left: target.offsetLeft || 0,
			width: target.offsetWidth || target.innerWidth,
			height: target.offsetHeight || target.innerHeight,
			*/
			scrollTop: target.scrollY || target.scrollTop || 0,
			scrollLeft: target.scrollX || target.scrollLeft || 0,
			originalEvent: null,
		};
		return fromEvent(target, 'scroll').pipe(
			auditTime(33), // 30 fps
			map((originalEvent) => {
				/*
				event.top = target.offsetTop || 0;
				event.left = target.offsetLeft || 0;
				event.width = target.offsetWidth || target.innerWidth;
				event.height = target.offsetHeight || target.innerHeight;
				*/
				event.scrollTop = target.scrollY || target.scrollTop || 0;
				event.scrollLeft = target.scrollX || target.scrollLeft || 0;
				event.originalEvent = originalEvent;
				return event;
			}),
			startWith(event),
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
