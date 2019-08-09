/* jshint esversion: 6 */


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
		const onClose = () => {
			if (node.classList.contains('zoomed')) {
				this.zoomOut(scope, node, content, rect);
				if (attributes.zoomed !== undefined) {
					this.$timeout(() => {
						scope.$root.gallery = null;
					});
				}
			}
		};
		const onOpen = () => {
			if (!node.classList.contains('zoomed')) {
				rect = Rect.fromNode(node);
				this.zoomIn(scope, node, content, rect);
			}
		};
		const onClick = () => {
			// const slides = [...node.querySelectorAll('.swiper-slide')];
			if (node.classList.contains('zoomed')) {
				this.zoomOut(scope, node, content, rect);
				if (attributes.zoomed !== undefined) {
					this.$timeout(() => {
						scope.$root.gallery = null;
					});
				}
			} else {
				rect = Rect.fromNode(node);
				this.zoomIn(scope, node, content, rect);
			}
		};
		const addListeners = () => {
			const close = node.querySelector('.zoomable__close');
			if (close) {
				close.addEventListener('click', onClose);
			}
			triggers = [...node.querySelectorAll('.zoomable__trigger')];
			// console.log('ZoomableDirective', node, content, triggers);
			triggers.forEach(x => x.addEventListener('click', onClick));
		};
		const removeListeners = () => {
			const close = node.querySelector('.zoomable__close');
			if (close) {
				close.removeEventListener('click', onClose);
			}
			if (triggers) {
				triggers.forEach(x => x.removeEventListener('click', onClick));
			}
		};
		scope.$on('lastItem', ($scope, item) => {
			// console.log('lastItem');
			removeListeners();
			addListeners();
		});
		this.$timeout(() => {
			addListeners();
		});
		element.on('$destroy', () => {
			triggers.forEach(x => x.removeEventListener('click', onClick));
		});
		console.log('ZoomableDirective', scope.$id);
		scope.onZoom = (item) => {
			const rect = Rect.fromNode(content);
			console.log('ZoomableDirective.onZoom', scope.zoomed);
			TweenMax.set(node, { height: rect.height });
			this.$timeout(() => {
				scope.zoomed = !scope.zoomed;
			});
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
		if (attributes.zoomed !== undefined) {
			onOpen();
		}
	}

	zoomIn(scope, node, content, rect) {
		// TweenMax.set(node, { height: rect.height });
		// TweenMax.set(content, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
		node.classList.add('zoomed');
		scope.zoomed = true;
		// TweenMax.set(content, { left: 0, top: 0, width: '100%', height: '100%' });
		setTimeout(() => {
			scope.$broadcast('onResize', scope.zoomed);
		}, 1);
		// scope.$emit('onDroppinIn', true);
	}

	zoomOut(scope, node, content, rect) {
		// TweenMax.set(node, { height: 'auto' });
		// TweenMax.set(content, { clearProps: 'all' });
		node.classList.remove('zoomed');
		scope.zoomed = false;
		setTimeout(() => {
			scope.$broadcast('onResize', scope.zoomed);
		}, 1);
		// scope.$emit('onDroppinIn', false);
	}

	zoomInAnimated(scope, node, content, rect) {
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

	zoomOutAnimated(scope, node, content, rect) {
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
	}

	static factory($timeout, DomService) {
		return new ZoomableDirective($timeout, DomService);
	}

}

ZoomableDirective.factory.$inject = ['$timeout', 'DomService'];
