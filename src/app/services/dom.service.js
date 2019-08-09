/* jshint esversion: 6 */

import { combineLatest, fromEvent, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { auditTime, distinctUntilChanged, filter, first, map, shareReplay, startWith } from 'rxjs/operators';
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

	hasWebglSupport() {
		if (this.isIE()) {
			return false;
		}
		if (!this.hasWebgl()) {
			return false;
		}
		return true;
	}

	isIE() {
		const ua = window.navigator.userAgent;
		const msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		const trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			const rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		const edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		// other browser
		return false;
	}

	hasWebgl() {
		let gl, debugInfo, vendor, renderer, has = false;
		try {
			const canvas = document.createElement('canvas');
			if (!!window.WebGLRenderingContext) {
				gl = canvas.getContext('webgl', {
						failIfMajorPerformanceCaveat: true
					}) ||
					canvas.getContext('experimental-webgl', {
						failIfMajorPerformanceCaveat: true
					});
			}
		} catch (e) {
			console.log('no webgl');
		}
		if (gl) {
			debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
			vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
			renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
			has = true;
		}
		console.log(`WebGLCapabilities debugInfo: ${debugInfo} vendor: ${vendor} renderer: ${renderer} `);
		return has;
	}

	getOuterHeight(node) {
		let height = node.clientHeight;
		const computedStyle = window.getComputedStyle(node);
		height += parseInt(computedStyle.marginTop, 10);
		height += parseInt(computedStyle.marginBottom, 10);
		height += parseInt(computedStyle.borderTopWidth, 10);
		height += parseInt(computedStyle.borderBottomWidth, 10);
		return height;
	}

	getOuterWidth(node) {
		let width = node.clientWidth;
		const computedStyle = window.getComputedStyle(node);
		width += parseInt(computedStyle.marginLeft, 10);
		width += parseInt(computedStyle.marginRight, 10);
		width += parseInt(computedStyle.borderLeftWidth, 10);
		width += parseInt(computedStyle.borderRightWidth, 10);
		return width;
	}

	raf$() {
		return DomService.raf$;
	}

	windowRect$() {
		return DomService.windowRect$;
	}

	rafAndRect$() {
		return DomService.rafAndRect$;
	}

	scroll$() {
		return DomService.scroll$;
	}

	scrollAndRect$() {
		return DomService.scrollAndRect$;
	}

	smoothScroll$(selector, friction = 20) {
		const body = document.querySelector('body');
		const node = document.querySelector(selector);
		// const outerHeight = this.getOuterHeight(node);
		let down = false;
		/*
		const onWheel = (event) => {
			down = true;
		}
		const onDown = () => {
			down = true;
		}
		const onUp = () => {
			down = false;
		}
		document.addEventListener('wheel', onWheel);
		document.addEventListener('touchstart', onDown);
		document.addEventListener('touchend', onUp);
		*/
		/*
		document.addEventListener('touchstart', () => {
			console.log('touchstart');
			body.classList.add('down');
			down = true;
		}, {passive:true});
		document.addEventListener('touchend', () => {
			body.classList.remove('down');
			down = false;
		});
		console.log(window);
		*/
		return this.raf$().pipe(
			map(() => {
				const outerHeight = this.getOuterHeight(node);
				// console.log(window.DocumentTouch);
				// console.log(document instanceof DocumentTouch);
				// console.log(navigator.msMaxTouchPoints);
				if (body.offsetHeight !== outerHeight) {
					// margin ?
					body.style = `height: ${outerHeight}px`;
				}
				const nodeTop = node.top || 0;
				const top = down ? -this.scrollTop : Math.round((nodeTop + (-this.scrollTop - nodeTop) / friction) * 100) / 100;
				if (node.top !== top) {
					node.top = top;
					node.style = `position: fixed; width: 100%; transform: translateY(${top}px)`;
					return top;
				} else {
					return null;
				}
			}),
			filter(x => x !== null),
			shareReplay()
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

	rafIntersection$(node) {
		return this.rafAndRect$().pipe(
			map(datas => {
				// const scrollTop = datas[0];
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				const response = DomService.rafIntersection_;
				response.scroll = datas[0];
				response.windowRect = datas[1];
				response.rect = rect;
				response.intersection = intersection;
				return response;
			})
		);
	}

	scrollIntersection$(node) {
		return this.scrollAndRect$().pipe(
			map(datas => {
				// const scrollTop = datas[0];
				const windowRect = datas[1];
				const rect = Rect.fromNode(node);
				const intersection = rect.intersection(windowRect);
				const response = DomService.scrollIntersection_;
				response.scroll = datas[0];
				response.windowRect = datas[1];
				response.rect = rect;
				response.intersection = intersection;
				return response;
			})
		);
	}

	appear$(node, value = 0.0) { // -0.5
		return this.rafIntersection$(node).pipe(
			filter(x => x.intersection.y > value),
			first()
		);
	}

	visibility$(node, value = 0.5) {
		return this.rafIntersection$(node).pipe(
			map(x => x.intersection.y > value),
			distinctUntilChanged()
		);
	}

	firstVisibility$(node, value = 0.5) {
		return this.visibility$(node, value).pipe(
			filter(visible => visible),
			first()
		);
	}

	addCustomRules() {
		const sheet = this.addCustomSheet();
		const body = document.querySelector('body');
		const scrollBarWidth = window.innerWidth - body.clientWidth;
		let rule = `body.droppin-in { padding-right: ${scrollBarWidth}px; }`;
		sheet.insertRule(rule, 0);
		rule = `body.droppin-in header { width: calc(100% - ${scrollBarWidth}px); }`;
		sheet.insertRule(rule, 1);
		rule = `body.droppin-in menu--product { width: calc(100% - ${scrollBarWidth}px); }`;
		sheet.insertRule(rule, 2);
	}

	addCustomSheet() {
		const style = document.createElement('style');
		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);
		return style.sheet;
	}

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
DomService.rafIntersection_ = {};
DomService.scrollIntersection_ = {};
DomService.raf$ = range(0, Number.POSITIVE_INFINITY, animationFrame);
DomService.windowRect$ = function() {
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
		startWith(windowRect)
	);
}();
DomService.rafAndRect$ = combineLatest(DomService.raf$, DomService.windowRect$);
DomService.scroll$ = function() {
	const target = window;
	let previousTop = DomService.getScrollTop(target);
	const event = {
		/*
		top: target.offsetTop || 0,
		left: target.offsetLeft || 0,
		width: target.offsetWidth || target.innerWidth,
		height: target.offsetHeight || target.innerHeight,
		*/
		scrollTop: previousTop,
		scrollLeft: DomService.getScrollLeft(target),
		direction: 0,
		originalEvent: null,
	};
	return fromEvent(target, 'scroll').pipe(
		startWith(event),
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
			const diff = event.scrollTop - previousTop;
			event.direction = diff ? diff / Math.abs(diff) : 0;
			previousTop = event.scrollTop;
			event.originalEvent = originalEvent;
			return event;
		}) // ,
		// filter(event => event.direction !== 0)
	);
}();
DomService.scrollAndRect$ = combineLatest(DomService.scroll$, DomService.windowRect$);
