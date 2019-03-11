/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { shareReplay } from 'rxjs/operators';

export default class RafService {

	raf$() {
		return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(
			shareReplay()
		);
	}

	static factory() {
		return new RafService();
	}

}

RafService.factory.$inject = [];
