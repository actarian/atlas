/* jshint esversion: 6 */

import Highway from '@dogstudio/highway';
import DomService from '../services/dom.service';
import Rect from '../shared/rect';
import CustomRenderer from './custom-renderer';

export default class PageNoTransition extends Highway.Transition {

	in ({ from, to, done }) {
		// console.log('PageNoTransition.in');
		window.scrollTo(0, 0);
		const loader = document.querySelector('.loader--cube');
		TweenMax.set(loader, { opacity: 0, display: 'none' });
		CustomRenderer.$destroy(from);
		TweenMax.set(to, { opacity: 0, minHeight: from.offsetHeight });
		if (PageNoTransition.origin) {
			const left = PageNoTransition.origin.x / window.innerWidth * 100;
			const top = PageNoTransition.origin.y;
			TweenMax.set(to, { scale: 1.1, transformOrigin: `${left}% ${top}px` });
		}
		TweenMax.set(to, { scale: 1, opacity: 1 });
		TweenMax.set(to, { clearProps: 'all' });
		TweenMax.set(to, { minHeight: 0, opacity: 1 });
		done();
	}

	out({ from, trigger, done }) {
		// console.log('PageNoTransition.out');
		const loader = document.querySelector('.loader--cube');
		TweenMax.set(loader, { opacity: 0, display: 'block' });
		TweenMax.set(loader, { opacity: 1 });
		const headerMenu = document.querySelector('.header__menu');
		if (headerMenu) {
			headerMenu.classList.remove('opened');
		}
		let left = 50;
		let top = DomService.getScrollTop(window);
		if (trigger instanceof HTMLElement) {
			const rect = Rect.fromNode(trigger);
			PageNoTransition.origin = rect.center;
			top += rect.center.y;
			left = rect.center.x / window.innerWidth * 100;
		}
		TweenMax.set(from, { transformOrigin: `${left}% ${top}px` });
		TweenMax.set(from, { scale: 1.1, opacity: 0 });
		done();
	}
}
