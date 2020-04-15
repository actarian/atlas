import { fromEvent } from "rxjs";
import { auditTime, filter, shareReplay } from "rxjs/operators";

export default class SectionHilightDirective {

	constructor() {
		this.restrict = 'C';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		SectionHilightDirective.hilights.push(node);
		const subscription = SectionHilightDirective.hilight$.subscribe(() => {
			// console.log('scroll');
		});
		scope.$on('$destroy', () => {
			const index = SectionHilightDirective.hilights.indexOf(node);
			if (index !== -1) {
				SectionHilightDirective.hilights.splice(index, 1);
			}
			subscription.unsubscribe();
		});
	}

	static hilight$_() {
		return fromEvent(window, 'scroll', false).pipe(
			auditTime(500),
			filter(() => {
				const ww = window.innerWidth;
				if (ww < 1024) {
					return;
				}
				const wh = window.innerHeight;
				const gt = 60;
				const innerRect = { left: 0, top: gt, width: ww, height: wh - gt, right: ww, bottom: wh };
				const o = SectionHilightDirective.hilights.reduce((p, c, i) => {
					const rect = c.getBoundingClientRect();
					// if (Math.abs(rect.top + rect.height / 2 - innerRect.top + innerRect.height / 2) < innerRect.height / 2) {
					if (SectionHilightDirective.intersectRect(rect, innerRect) && rect.top < innerRect.height / 2 && rect.bottom > innerRect.height / 2) {
						if (p !== null) {
							// console.log('intersect', c, Math.abs(p.top - innerRect.top), Math.abs(rect.top - innerRect.top));
							if (Math.abs(p.top - innerRect.top) > Math.abs(rect.top - innerRect.top)) {
								return { node: c, top: rect.top };
							}
						} else {
							return { node: c, top: rect.top };
						}
					}
					// }
					return p;
				}, null);
				if (o !== null && o.top !== undefined) {
					SectionHilightDirective.scrollTo(o.top);
					return true;
				}
			}),
			shareReplay(1),
		);
	}

	static scrollTo(top) {
		if (this.to) {
			clearTimeout(this.to);
		}
		this.to = setTimeout(() => {
			const from = this.currentTop();
			/*
			console.log('scrollTo', top);
			const html = document.querySelector('html');
			console.log(from, to);
			*/
			TweenMax.to(window, 0.350, {
				scrollTo: { y: from + top - 60, offset: 0, autoKill: true },
			});
		}, 100);
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
SectionHilightDirective.hilight$ = SectionHilightDirective.hilight$_();
SectionHilightDirective.hilights = [];

SectionHilightDirective.factory.$inject = [];
