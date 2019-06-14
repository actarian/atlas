/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Rect from '../shared/rect';

// let INDEX = 0;

export default class ZoomableDirective {

	// src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="

	constructor(
		$timeout,
		DomService
	) {
		this.$timeout = $timeout;
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		let triggers, rect;
		const node = element[0];
		const content = node.querySelector('.zoomable__content');
		const onClick = () => {
			// console.log(scope);
			const slides = [...node.querySelectorAll('.swiper-slide')];
			if (node.classList.contains('zoomed')) {
				TweenMax.to(content, 0.3, {
					left: rect.left,
					top: rect.top,
					width: rect.width,
					height: rect.height,
					ease: Expo.easeInOut,
					// ease: CustomEase.create('custom', 'M0,0,C0.596,0,0.346,1,1,1'),
					onUpdate: () => {
						scope.$broadcast('onResize');
					},
					onComplete: () => {
						TweenMax.set(node, { height: 'auto' });
						TweenMax.set(content, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
						node.classList.remove('zoomed');
						scope.$emit('onDroppinIn', false);
					}
				});
			} else {
				rect = Rect.fromNode(node);
				TweenMax.set(node, { height: rect.height });
				TweenMax.set(content, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
				node.classList.add('zoomed');
				scope.$emit('onDroppinIn', true);
				TweenMax.to(content, 0.3, {
					left: 0,
					top: 0,
					width: '100%',
					height: '100%',
					ease: Expo.easeInOut,
					// ease: CustomEase.create('custom', 'M0,0,C0.596,0,0.346,1,1,1'),
					onUpdate: () => {
						// window.dispatchEvent(new Event('resize'));
						// slides.forEach(x => x.style.width = content.style.width);
						scope.$broadcast('onResize');
					},
					onComplete: () => {
						// scope.$broadcast('onResize');
					}
				});
			}
		};
		const addListeners = () => {
			triggers = [...node.querySelectorAll('.zoomable__trigger')];
			// console.log('ZoomableDirective', node, content, triggers);
			triggers.forEach(x => x.addEventListener('click', onClick));
		};
		const removeListeners = () => {
			if (triggers) {
				triggers.forEach(x => x.removeEventListener('click', onClick));
			}
		};
		scope.$on('lastItem', ($scope, item) => {
			// console.log('lastItem');
			removeListeners();
			addListeners();
		});
		addListeners();
		element.on('$destroy', () => {
			triggers.forEach(x => x.removeEventListener('click', onClick));
		});
		scope.onZoom = (item) => {
			const rect = Rect.fromNode(content);
			// console.log(rect);
			TweenMax.set(node, { height: rect.height });
			this.scope.zoomed = !this.scope.zoomed;
			/*
			TweenMax.to(u, 0.50, {
				scaleX: 1,
				transformOrigin: '0 50%',
				delay: 0,
				ease: Power3.easeInOut,
				overwrite: 'all',
				onComplete: () => {
					TweenMax.set(u, { transformOrigin: '100% 50%', scaleX: 1 });
					TweenMax.to(u, 0.50, {
						scaleX: 0,
						transformOrigin: '100% 50%',
						delay: 1.0,
						ease: Power3.easeInOut,
						overwrite: 'all',
						onComplete: () => {
							animate();
						}
					});
				}
			});
			*/

		};
	}

	static factory($timeout, DomService) {
		return new ZoomableDirective($timeout, DomService);
	}

}

ZoomableDirective.factory.$inject = ['$timeout', 'DomService'];
