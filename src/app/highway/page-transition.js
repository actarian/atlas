/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';
import CustomRenderer from './custom-renderer';

export default class PageTransition extends Highway.Transition {
	in ({ from, to, done }) {
		// console.log('PageTransition.in');
		TweenMax.set(to, { opacity: 0, minHeight: from.offsetHeight });
		window.scrollTo(0, 0);
		if (CustomRenderer.content) {
			CustomRenderer.content.remove();
			CustomRenderer.content = null;
		}
		if (CustomRenderer.$newScope) {
			CustomRenderer.$newScope.$destroy();
			CustomRenderer.$newScope = null;
		}
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
		const headerMenu = document.querySelector('.header__menu');
		if (headerMenu) {
			headerMenu.classList.remove('opened');
			/*
			TweenMax.to(headerMenu, 0.3, {
				maxHeight: 0,
				delay: 0,
				onComplete: () => {
					TweenMax.set(headerMenu, { clearProps: 'all' });
					// headerMenu.classList.remove('opened');
				}
			});
			*/
		}
		TweenMax.to(from, 0.6, {
			opacity: 0,
			delay: 0.150,
			overwrite: 'all',
			onComplete: () => {
				setTimeout(done, 500);
			}
		});
	}
}
