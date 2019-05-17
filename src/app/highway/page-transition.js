/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';

export default class PageTransition extends Highway.Transition {
	in ({ from, to, done }) {
		// console.log('PageTransition.in');
		TweenMax.set(to, { opacity: 0, minHeight: from.offsetHeight });
		window.scrollTo(0, 0);
		from.remove();
		TweenMax.to(to, 0.6, {
			opacity: 1,
			delay: 0.250,
			overwrite: 'all',
			onComplete: () => {
				setTimeout(() => {
					TweenMax.set(to, { minHeight: 0 });
					done();
				}, 50);
			}
		});
	}
	out({ from, done }) {
		// console.log('PageTransition.out');
		TweenMax.to(from, 0.6, {
			opacity: 0,
			delay: 0,
			overwrite: 'all',
			onComplete: () => {
				setTimeout(done, 500);
			}
		});
	}
}
