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
		return DomService.getScrollTop(window);
	}

	get scrollLeft() {
		return DomService.getScrollLeft(window);
	}

	getOuterHeight(node) {
		const height = node.clientHeight;
		const computedStyle = window.getComputedStyle(node);
		height += parseInt(computedStyle.marginTop, 10);
		height += parseInt(computedStyle.marginBottom, 10);
		height += parseInt(computedStyle.borderTopWidth, 10);
		height += parseInt(computedStyle.borderBottomWidth, 10);
		return height;
	}

	getOuterWidth(node) {
		const width = node.clientWidth;
		const computedStyle = window.getComputedStyle(node);
		width += parseInt(computedStyle.marginLeft, 10);
		width += parseInt(computedStyle.marginRight, 10);
		width += parseInt(computedStyle.borderLeftWidth, 10);
		width += parseInt(computedStyle.borderRightWidth, 10);
		return width;
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
		const target = window;
		const event = {
			/*
			top: target.offsetTop || 0,
			left: target.offsetLeft || 0,
			width: target.offsetWidth || target.innerWidth,
			height: target.offsetHeight || target.innerHeight,
			*/
			scrollTop: DomService.getScrollTop(target),
			scrollLeft: DomService.getScrollLeft(target),
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
				event.scrollTop = DomService.getScrollTop(target);
				event.scrollLeft = DomService.getScrollLeft(target);
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

	smoothScroll$(selector, friction = 20) {
		const body = document.querySelector('body');
		const node = document.querySelector(selector);
		// const outerHeight = this.getOuterHeight(node);
		return this.raf$().pipe(
			map(() => {
				const outerHeight = this.getOuterHeight(node);
				if (body.offsetHeight !== outerHeight) {
					body.style = `height: ${outerHeight}px`;
				}
				const nodeTop = node.top || 0;
				const top = Math.round((nodeTop + (-this.scrollTop - nodeTop) / friction) * 100) / 100;
				if (node.top !== top) {
					node.top = top;
					node.style = `position: fixed; transform: translateY(${top}px)`;
					return top;
				} else {
					return null;
				}
			}),
			filter(x => x !== null),
			shareReplay(),
		);
	}

	/*
	// trackpad
	window.onwheel = function(e) {
	  e.preventDefault();
	  if (e.ctrlKey) {
	    zoom += e.deltaY;
	  } else {
	    offsetX += e.deltaX * 2;
	    offsetY -= e.deltaY * 2;
	  }
	};
	*/

	static factory() {
		return new DomService();
	}

	static getScrollTop(node) {
		return node.pageYOffset || node.scrollY || node.scrollTop || 0;
	}

	static getScrollLeft(node) {
		return node.pageXOffset || node.scrollX || node.scrollLeft || 0;
	}

}

DomService.factory.$inject = [];
