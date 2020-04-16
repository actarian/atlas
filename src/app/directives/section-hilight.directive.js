import { fromEvent } from "rxjs";
import { filter, shareReplay } from "rxjs/operators";

export default class SectionHilightDirective {

	constructor() {
		this.restrict = 'C';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		SectionHilightDirective.hilights.push(node);
		SectionHilightDirective.setNodes();
		const wheel = SectionHilightDirective.wheel$.subscribe(() => {
			// console.log('wheel');
		});
		scope.$on('$destroy', () => {
			const index = SectionHilightDirective.hilights.indexOf(node);
			if (index !== -1) {
				SectionHilightDirective.hilights.splice(index, 1);
				SectionHilightDirective.setNodes();
			}
			wheel.unsubscribe();
		});
	}

	static setNodes() {
		const nodes = SectionHilightDirective.hilights.slice();
		if (nodes.length) {
			if (nodes[0].previousElementSibling) {
				nodes.unshift(nodes[0].previousElementSibling);
			}
			if (nodes[nodes.length - 1].nextElementSibling) {
				nodes.push(nodes[nodes.length - 1].nextElementSibling);
			}
		}
		SectionHilightDirective.nodes = nodes;
	}

	static wheel$_() {
		let animating, scrolling, index_;
		return fromEvent(window, 'mousewheel', { passive: false }).pipe(
			filter((event) => {
				const ww = window.innerWidth;
				if (ww < 1024) {
					return;
				}
				if (animating || scrolling) {
					event.preventDefault();
					return;
				}
				scrolling = true;
				const currentTop = SectionHilightDirective.currentTop();
				const direction = event.deltaY / Math.abs(event.deltaY);
				if (Number.isInteger(direction)) {
					const wh = window.innerHeight;
					const gt = 60;
					const innerRect = { left: 0, top: gt, width: ww, height: wh - gt, right: ww, bottom: wh };
					const nodes = SectionHilightDirective.nodes;
					let index = nodes.reduce((p, c, i) => {
						const rect = c.getBoundingClientRect();
						if (p === -1 && SectionHilightDirective.intersectRect(rect, innerRect)) { //  && rect.top < innerRect.bottom - 40 && rect.bottom > 40
							return i;
						} else {
							return p;
						}
					}, -1);
					// let index = SectionHilightDirective.index;
					if (index !== -1) {
						if (index_ !== undefined) {
							index = index_ + direction;
						}
						if (index >= 0 && index < nodes.length) {
							animating = true;
							event.preventDefault();
							let node = nodes[index];
							const rect = node.getBoundingClientRect();
							TweenMax.to(window, 0.500, {
								scrollTo: {
									y: currentTop + rect.top - 60,
									offset: 0,
									autoKill: true
								}
							});
							setTimeout(() => {
								index_ = index;
								animating = false;
							}, 700);
						}
					}
					scrolling = false;
					return index !== -1;
				}
			}),
			shareReplay(1),
		);
	}

	static currentTop() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) {
			return self.pageYOffset;
		}
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop) {
			return document.documentElement.scrollTop;
		}
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) {
			return document.body.scrollTop;
		}
		return 0;
	}

	static intersectRect(r1, r2) {
		return !(r2.left > r1.right ||
			r2.right < r1.left ||
			r2.top > r1.bottom ||
			r2.bottom < r1.top);
	}

	static factory() {
		return new SectionHilightDirective();
	}

}

SectionHilightDirective.tween = { pow: 0 };
SectionHilightDirective.wheel$ = SectionHilightDirective.wheel$_();
SectionHilightDirective.hilights = [];
SectionHilightDirective.nodes = [];

SectionHilightDirective.factory.$inject = [];
