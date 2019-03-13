/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';
import TweenLite from 'gsap';

export default class PageTransition extends Highway.Transition {
	in ({ from, to, done }) {
		// TweenLite.set(to, { position: 'fixed', zIndex: 10000, top: 0, width: '100%', opacity: 0 });
		TweenLite.set(to, { opacity: 0, minHeight: from.offsetHeight });
		from.remove();
		window.scrollTo(0, 0);
		TweenLite.to(to, 0.35, {
			opacity: 1,
			delay: 0.5,
			overwrite: 'all',
			onComplete: () => {
				TweenLite.set(to, { minHeight: 0 });
				done();
			}
		});
	}
	out({ from, done }) {
		TweenLite.to(from, 0.35, {
			opacity: 0,
			overwrite: 'all',
			onComplete: () => {
				done();
			}
		});
		// done();
	}
}
