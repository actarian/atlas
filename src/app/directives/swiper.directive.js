/* jshint esversion: 6 */

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
};

export class SwiperDirective {

	constructor() {
		this.restrict = 'A';
		this.options = DEFAULT_SWIPER_OPTIONS;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		TweenMax.set(node, { opacity: 0 });
		scope.$on('lastItem', (slide) => {
			this.onSwiper(element, attributes);
		});
		element.on('$destroy', () => {
			if (element.swiper) {
				element.swiper.destroy();
			}
		});
		scope.$watch('$viewContentLoaded', () => {
			this.onSwiper(element, attributes);
		});
		scope.$on('onResize', ($scope) => {
			this.onResize(scope, element, attributes);
		});
	}

	onResize(scope, element, attributes) {
		if (element.swiper) {
			Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
			element.swiper.update();
		}
	}

	onSwiper(element, attributes) {
		const node = element[0];
		//const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;
		if (element.swiper) {
			element.swiper.update();
		} else {
			//this.options.initialSlide = initialSlide;
			const on = this.options.on || (this.options.on = {});
			const callback = on.init;
			if (!on.init || !on.init.swiperDirectiveInit) {
				on.init = function() {
					TweenMax.to(node, 0.4, {
						opacity: 1,
						ease: Power2.easeOut,
					});
					if (typeof callback === 'function') {
						callback.call(this);
					}
				};
				on.init.swiperDirectiveInit = true;
			}
			if (attributes.noLoop !== undefined) {
				this.options.loop = false;
			}
			console.log('attributes.noLoop', attributes.noLoop);
			TweenMax.set(node, { opacity: 1 });
			element.swiper = new Swiper(element, this.options);
			element.swiper._opening = true;
			element.addClass('swiper-init');
		}
	}

	static factory() {
		return new SwiperDirective();
	}

}

SwiperDirective.factory.$inject = [];

export class SwiperGalleryDirective extends SwiperDirective {

	constructor() {
		super();
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
			onSlideClick: function(swiper) {
				angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		};
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
		console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);
	}

	static factory() {
		return new SwiperGalleryDirective();
	}

}

SwiperGalleryDirective.factory.$inject = [];

export class SwiperHeroDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			parallax: true,
			autoplay: 5000,
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			onSlideClick: function(swiper) {
				angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		};
	}

	static factory() {
		return new SwiperHeroDirective();
	}

}

SwiperHeroDirective.factory.$inject = [];

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
		};
	}

	static factory() {
		return new SwiperProjectsDirective();
	}

}

SwiperProjectsDirective.factory.$inject = [];

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
			onSlideClick: function(swiper) {
				angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
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
			on: {
				init: function() {
					const swiper = this;
					const container = swiper.$el[0];
					const lis = [...container.querySelectorAll('.nav--timeline>li')];
					lis.forEach((x, i) => {
						x.addEventListener('click', () => {
							swiper.slideTo(i, 600);
						});
					});

				},
				slideChange: function() {
					const swiper = this;
					const container = swiper.$el[0];
					const lis = [...container.querySelectorAll('.nav--timeline>li')];
					lis.forEach((x, i) => {
						if (i === swiper.activeIndex) {
							x.classList.add('active');
						} else {
							x.classList.remove('active');
						}
					});
				},
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
		};
	}

	static factory() {
		return new SwiperTimelineDirective();
	}

}

SwiperTimelineDirective.factory.$inject = [];
