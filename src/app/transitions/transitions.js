/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';
import TweenLite from 'gsap';

class PageTransition extends Highway.Transition {
	in ({ from, to, done }) {
		if (window.scroll) {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} else {
			window.scrollTo(0, 0);
		}
		// TweenLite.set(to, { position: 'fixed', zIndex: 10000, top: 0, width: '100%', opacity: 0 });
		TweenLite.set(to, { opacity: 0 });
		TweenLite.from(to, 0.35, {
			opacity: 0,
			overwrite: 'all',
			onComplete: () => {
				from.remove();
				TweenLite.to(to, 0.35, {
					opacity: 1,
					overwrite: 'all',
					onComplete: () => {
						// TweenLite.set(to, { position: 'static', zIndex: 0 });
						// from.remove();
						done();
					}
				});
			}
		});
	}
	out({ done }) {
		done();
	}
}

export default PageTransition;
