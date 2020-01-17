import { tap } from 'rxjs/operators';
import Rect from '../shared/rect';

export default class StickyDirective {

	constructor(
		$timeout,
		DomService
	) {
		this.$timeout = $timeout;
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const content = node.querySelector('[sticky-content]');
		const onClick = (event) => {
			const isChild = this.domService.traverseUp(event.target, (node) => {
				return node.classList && node.classList.contains('form__group');
			});
			if (isChild && window.innerWidth > 860) {
				// console.log('StickyDirective.onClick');
				const top = this.domService.scrollTop + node.getBoundingClientRect().top;
				window.scroll({
					top: top,
					left: 0,
					behavior: 'smooth'
				});
			}
		};
		this.$timeout(() => {
			const subscription = this.scroll$(element, attributes).subscribe();
			content.addEventListener('click', onClick);
			scope.$on('$destroy', () => {
				subscription.unsubscribe();
				content.removeEventListener('click', onClick);
			});
		});
	}

	scroll$(element, attributes) {
		const node = element[0];
		const content = node.querySelector('[sticky-content]');
		const stickyTop = parseInt(attributes.sticky) || 0;
		return this.domService.scroll$().pipe(
			tap(scroll => {
				let rect = Rect.fromNode(node);
				// const maxtop = node.offsetHeight - content.offsetHeight;
				// top = Math.max(0, Math.min(maxtop, top - rect.top));
				const maxTop = Math.max(0, stickyTop - rect.top);
				// content.setAttribute('style', `transform: translateY(${maxTop}px);`);
				// console.log(maxTop, stickyTop, rect.top);
				const sticky = maxTop > 0;
				if (sticky !== element.sticky) {
					element.sticky = sticky;
					if (sticky) {
						node.classList.add('sticky');
					} else {
						node.classList.remove('sticky');
					}
				}
			})
		);
	}

	scroll$_(element, attributes) {
		const node = element[0];
		const content = node.querySelector('[sticky-content]');
		const stickyTop = parseInt(attributes.sticky) || 0;
		return this.domService.raf$().pipe(
			tap(datas => {
				let rect = Rect.fromNode(node);
				// const maxtop = node.offsetHeight - content.offsetHeight;
				// top = Math.max(0, Math.min(maxtop, top - rect.top));
				const maxTop = Math.max(0, stickyTop - rect.top);
				content.setAttribute('style', `transform: translateY(${maxTop}px);`);
				const sticky = maxTop > 0;
				if (sticky !== element.sticky) {
					element.sticky = sticky;
					if (sticky) {
						node.classList.add('sticky');
					} else {
						node.classList.remove('sticky');
					}
				}
			})
		);
	}

	static factory($timeout, DomService) {
		return new StickyDirective($timeout, DomService);
	}

}

StickyDirective.factory.$inject = ['$timeout', 'DomService'];
