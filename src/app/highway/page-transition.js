/* jshint esversion: 6 */

import Highway from '@dogstudio/highway';
import DomService from '../services/dom.service';
import Rect from '../shared/rect';
import CustomRenderer from './custom-renderer';

export default class PageTransition extends Highway.Transition {

	in ({ from, to, done }) {
		// console.log('PageTransition.in');
		const loader = document.querySelector('.loader--cube');
		TweenMax.to(loader, 0.45, {
			opacity: 0,
			ease: Power2.easeInOut,
			onComplete: () => {
				TweenMax.set(loader, { display: 'none' });
			}
		});
		TweenMax.set(to, { opacity: 0, minHeight: from.offsetHeight });

		CustomRenderer.$destroy(from);
		if (PageTransition.origin) {
			const left = PageTransition.origin.x / window.innerWidth * 100;
			const top = PageTransition.origin.y;
			TweenMax.set(to, { scale: 1.1, transformOrigin: `${left}% ${top}px` });
		}

		// console.log(PageTransition.origin);
		TweenMax.to(to, 0.6, {
			scale: 1,
			opacity: 1,
			delay: 0.1, // 0.250,
			// overwrite: 'all',
			ease: Power2.easeInOut,
			onComplete: () => {
				setTimeout(() => {
					TweenMax.set(to, { clearProps: 'all' });
					TweenMax.set(to, { minHeight: 0, opacity: 1 });
				}, 50);
				// ci sono estensioni che bloccano questo genere di script
				if (addthis.layers && addthis.layers.refresh) {
					addthis.layers.refresh();
				}
				done();
			}
		});
	}

	out({ from, trigger, done }) {
		// console.log('PageTransition.out');
		const loader = document.querySelector('.loader--cube');
		TweenMax.set(loader, { opacity: 0, display: 'block' });
		TweenMax.to(loader, 0.45, {
			opacity: 1,
			ease: Power2.easeInOut,
		});
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
		let left = 50;
		let top = DomService.getScrollTop(window);
		if (trigger instanceof HTMLElement) {
			const rect = Rect.fromNode(trigger);
			PageTransition.origin = rect.center;
			top += rect.center.y;
			left = rect.center.x / window.innerWidth * 100;
		}
		TweenMax.set(from, { transformOrigin: `${left}% ${top}px` });
		TweenMax.to(from, 0.6, {
			scale: 1.1,
			opacity: 0,
			delay: 0, // 0.150,
			// overwrite: 'all',
			ease: Power2.easeInOut,
			onComplete: () => {
				setTimeout(done, 500);
			}
		});
	}
}
