const DEFAULT_SWIPER_OPTIONS = {
	slidesPerView: 'auto',
	spaceBetween: 1,
	centeredSlides: true,
	loop: false,
	loopAdditionalSlides: 100,
	speed: 600,
	autoplay: 5000,
	keyboardControl: true,
	mousewheelControl: false,
	onSlideClick: function(swiper) {
		angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
};

export class SwiperDirective {

	constructor() {
		this.restrict = 'A';
		this.options = DEFAULT_SWIPER_OPTIONS;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		if (window.matchMedia('print').matches) {
			return;
		}
		const onBeforePrint = () => {
			if (element.swiper) {
				element.swiper.destroy();
			}
		};
		window.addEventListener('beforeprint', onBeforePrint);
		TweenMax.set(node, { opacity: 0 });
		scope.$on('lastItem', (slide) => {
			this.onSwiper(scope, element, attributes);
		});
		scope.$on('$destroy', () => {
			window.removeEventListener('beforeprint', onBeforePrint);
			if (element.swiper) {
				element.swiper.destroy();
			}
		});
		scope.$watch('$viewContentLoaded', () => {
			this.onSwiper(scope, element, attributes);
		});
		scope.$on('onResize', ($scope) => {
			this.onResize(scope, element, attributes);
		});
		this.linked(scope, element, attributes, controller);
	}

	linked(scope, element, attributes, controller) {
		// console.log('linked not overrided');
	}

	init(swiper, scope, element, attributes) {
		// console.log('init not overrided');
	}

	slideChangeTransitionStart(swiper, scope, element, attributes) {
		// console.log('slideChangeTransitionStart not overrided');
	}

	slideChangeTransitionEnd(swiper, scope, element, attributes) {
		// console.log('slideChangeTransitionEnd not overrided');
	}

	slideChange(swiper, scope, element, attributes) {
		// console.log('slideChange not overrided');
	}

	onResize(scope, element, attributes) {
		if (element.swiper) {
			Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
			element.swiper.update();
		}
	}

	onSwiper(scope, element, attributes) {
		const node = element[0];
		//const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;
		if (element.swiper) {
			element.swiper.update();
		} else {
			//this.options.initialSlide = initialSlide;
			let swiper_;
			this.options.onSlideClick = (swiper) => {
				angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
			};
			const on = this.options.on || (this.options.on = {});
			const self = this;
			on.init = function() {
				const swiper = this;
				TweenMax.to(node, 0.4, {
					opacity: 1,
					ease: Power2.easeOut,
				});
				setTimeout(() => {
					self.init(swiper, scope, element, attributes);
				}, 1);
			};
			on.slideChangeTransitionStart = function() {
				const swiper = this;
				self.slideChangeTransitionStart(swiper, scope, element, attributes);
			};
			on.slideChangeTransitionEnd = function() {
				const swiper = this;
				self.slideChangeTransitionEnd(swiper, scope, element, attributes);
			};
			on.slideChange = function() {
				const swiper = this;
				self.slideChange(swiper, scope, element, attributes);
			};
			if (attributes.noLoop !== undefined) {
				this.options.loop = false;
			}
			// console.log('attributes.noLoop', attributes.noLoop);
			TweenMax.set(node, { opacity: 1 });
			swiper_ = new Swiper(element, this.options);
			element.swiper = swiper_;
			element.swiper._opening = true;
			element.addClass('swiper-init');
		}
	}

	static factory() {
		return new SwiperDirective();
	}

}

SwiperDirective.factory.$inject = [];

export class SwiperGalleryHeroDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 30,
			loop: true,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	init(swiper, scope, element, attributes) {
		setTimeout(() => {
			swiper.update();
		});
	}

	onResize(scope, element, attributes) {
		if (element.swiper) {
			Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
			element.swiper.params.slidesPerView = scope.zoomed ? 1 : 'auto';
			element.swiper.update();
			if (element.swiper._opening) {
				element.swiper._opening = false;
				const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;
				if (initialSlide) {
					element.swiper.slideTo(initialSlide, 0);
				}
			}
		}
		// console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);
	}

	static factory() {
		return new SwiperGalleryHeroDirective();
	}

}

SwiperGalleryHeroDirective.factory.$inject = [];

export class SwiperGalleryDirective extends SwiperDirective {

	constructor() {
		super();
		let swiper_, element_, scope_;
		this.options = {
			slidesPerView: 'auto',
			loopAdditionalSlides: 100,
			loop: true,
			centeredSlides: false,
			// watchOverflow: true,
			spaceBetween: 1,
			// speed: 600,
			// autoplay: 5,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	init(swiper, scope, element, attributes) {
		scope.$on('onThronComplete', ($scope, id) => {
			this.next(swiper);
		});
		swiper.on('slideChange', () => {
			const slide = swiper.slides[swiper.realIndex];
			if (swiper.el.parentElement.classList.contains('zoomable__content') && slide.classList.contains('swiper-slide--video')) {
				swiper.el.classList.add('swiper-container--video');
				swiper.params.touchRatio = 0;
			} else {
				swiper.el.classList.remove('swiper-container--video');
				swiper.params.touchRatio = 1;
			}
		});
		setTimeout(() => {
			swiper.update();
		});
	}

	slideChangeTransitionStart(swiper, scope, element, attributes) {
		if (element) {
			this.pauseVideo(swiper, element, scope);
		}
	}

	pauseVideo(swiper, element, scope, id) {
		Array.from(swiper.slides).forEach(slide => {
			const node = slide.querySelector('video, [data-thron]');
			if (node) {
				if (node.hasAttribute('data-thron')) {
					scope.$broadcast('pauseThron', node.id);
				} else {
					node.pause();
				}
				/*
				if (slide.classList.contains('swiper-slide-active')) {
					// console.log('playing node', node);
					if (node.hasAttribute('data-thron')) {
						// console.log(id, node.id, id === node.id);
						if (id && id === node.id) {
							scope.$broadcast('playThron', node.id);
						} else if (!id) {
							scope.$broadcast('playThron', node.id);
						}
					} else {
						node.play();
					}
				} else {
					if (node.hasAttribute('data-thron')) {
						scope.$broadcast('pauseThron', node.id);
					} else {
						node.pause();
					}
				}
				*/
			}
		});
	}

	onResize(scope, element, attributes) {
		if (element.swiper) {
			Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
			element.swiper.params.slidesPerView = scope.zoomed ? 1 : 'auto';
			element.swiper.update();
			if (element.swiper._opening) {
				element.swiper._opening = false;
				const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;
				if (initialSlide) {
					element.swiper.slideTo(initialSlide, 0);
				}
			}
		}
		// console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);
	}

	next(swiper) {
		if (swiper.realIndex == swiper.slides.length - 1) {
			swiper.slideTo(0);
		} else {
			swiper.slideNext();
		}
	}

	static factory() {
		return new SwiperGalleryDirective();
	}

}

SwiperGalleryDirective.factory.$inject = [];

export class SwiperHeroDirective extends SwiperDirective {

	constructor() {
		super();
		let swiper_, element_, scope_;
		this.options = {
			speed: 600,
			parallax: true,
			/*
			autoplay: {
				delay: 10000,
			},
			*/
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	init(swiper, scope, element, attributes) {
		scope.$on('onThronCanPlay', ($scope, id) => {
			// console.log('SwiperHeroDirective.onThronCanPlay', id);
			this.toggleVideo(element, scope, id);
		});
		scope.$on('onThronComplete', ($scope, id) => {
			// console.log('SwiperHeroDirective.onThronComplete', id);
			this.next(swiper);
		});
		/*
		if (swiper.autoplay) {
			swiper.autoplay.start();
		}
		*/
	}

	slideChangeTransitionStart(swiper, scope, element, attributes) {
		if (element) {
			this.toggleVideo(element, scope);
		}
	}

	slideChangeTransitionEnd(swiper, scope, element, attributes) {
		if (element) {
			this.checkAutoplay(element, scope, swiper);
		}
	}

	toggleVideo(element, scope, id) {
		const slides = Array.from(element[0].querySelectorAll('.swiper-slide'));
		slides.forEach(slide => {
			const node = slide.querySelector('video, [data-thron]');
			if (node) {
				if (slide.classList.contains('swiper-slide-active')) {
					// console.log('playing node', node);
					if (node.hasAttribute('data-thron')) {
						// console.log(id, node.id, id === node.id);
						if (id && id === node.id) {
							scope.$broadcast('playThron', node.id);
						} else if (!id) {
							scope.$broadcast('playThron', node.id);
						}
					} else {
						node.play();
					}
				} else {
					if (node.hasAttribute('data-thron')) {
						scope.$broadcast('pauseThron', node.id);
					} else {
						node.pause();
					}
				}
			}
		});
	}

	checkAutoplay(element, scope, swiper) {
		const video = element[0].querySelector('.swiper-slide-active video, .swiper-slide-active [data-thron]');
		if (!video) {
			setTimeout(() => {
				this.next(swiper);
				// swiper.slideNext();
			}, 5000);
		}
	}

	next(swiper) {
		if (swiper.realIndex == swiper.slides.length - 1) {
			swiper.slideTo(0);
		} else {
			swiper.slideNext();
		}
	}

	static factory() {
		return new SwiperHeroDirective();
	}

}

SwiperHeroDirective.factory.$inject = [];

export class SwiperFocusDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	init(swiper, scope, element, attributes) {
		const container = swiper.$el[0];
		const tabs = Array.from(container.querySelectorAll('.btn--tab'));
		tabs.forEach((tab, i) => i === 0 ? tab.classList.add('active') : tab.classList.remove('active'));
	}

	slideChange(swiper, scope, element, attributes) {
		const container = swiper.$el[0];
		const tabs = Array.from(container.querySelectorAll('.btn--tab'));
		tabs.forEach((tab, i) => i === swiper.activeIndex ? tab.classList.add('active') : tab.classList.remove('active'));
	}

	linked(scope, element, attributes, controller) {
		const node = element[0];
		const tabs = Array.from(node.querySelectorAll('.btn--tab'));
		const onOver = (event) => {
			const index = tabs.indexOf(event.currentTarget);
			element.swiper.slideTo(index, 1000, function() {
				// console.log('swiper.complete');
			});
		}
		tabs.forEach(tab => {
			tab.addEventListener('mouseover', onOver);
		});
		scope.$on('$destroy', () => {
			tabs.forEach(tab => {
				tab.removeEventListener('mouseover', onOver);
			});
		});
	}

	static factory() {
		return new SwiperFocusDirective();
	}

}

SwiperFocusDirective.factory.$inject = [];

export class SwiperProjectsDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			// parallax: true,
			// autoplay: 5000,
			// loop: true,
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	static factory() {
		return new SwiperProjectsDirective();
	}

}

SwiperProjectsDirective.factory.$inject = [];

export class SwiperReferencesDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	static factory() {
		return new SwiperReferencesDirective();
	}

}

SwiperReferencesDirective.factory.$inject = [];

export class SwiperTileDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			parallax: true,
			autoplay: 5000,
			// loop: true,
			spaceBetween: 60,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	static factory() {
		return new SwiperTileDirective();
	}

}

SwiperTileDirective.factory.$inject = [];

export class SwiperTimelineDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			slidesPerView: 1,
			spaceBetween: 60,
			speed: 600,
			autoplay: 5000,
			keyboardControl: true,
			mousewheelControl: false,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		};
	}

	init(swiper, scope, element, attributes) {
		const container = swiper.$el[0];
		const lis = Array.from(container.querySelectorAll('.nav--timeline>li'));
		lis.forEach((x, i) => {
			x.addEventListener('click', () => {
				swiper.slideTo(i, 600);
			});
		});
	}

	slideChange(swiper, scope, element, attributes) {
		const container = swiper.$el[0];
		const lis = Array.from(container.querySelectorAll('.nav--timeline>li'));
		lis.forEach((x, i) => {
			if (i === swiper.activeIndex) {
				x.classList.add('active');
			} else {
				x.classList.remove('active');
			}
		});
	}

	static factory() {
		return new SwiperTimelineDirective();
	}

}

SwiperTimelineDirective.factory.$inject = [];
