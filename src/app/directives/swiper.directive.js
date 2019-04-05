/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

const DEFAULT_SWIPER_OPTIONS = {
	slidesPerView: 'auto',
	spaceBetween: 1,
	centeredSlides: true,
	loop: true,
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
		scope.$on('swiperSlideItemLast', (slide) => {
			this.onSwiper(element);
		});
		element.on('$destroy', () => {
			if (element.swiper) {
				element.swiper.destroy();
			}
		});
		setTimeout(() => {
			this.onSwiper(element);
		}, 1);
	}

	onSwiper(element) {
		if (element.swiper) {
			element.swiper.update();
		} else {
			element.swiper = new Swiper(element, this.options);
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
			spaceBetween: 1,
			centeredSlides: true,
			loop: true,
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
		this.options = {
			speed: 600,
			parallax: true,
			autoplay: 5000,
			loop: true,
			spaceBetween: 0,
			keyboardControl: true,
			mousewheelControl: false,
			onSlideClick: function(swiper) {
				angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
			},
			on: {
				/*
				setTranslate: function () {
					console.log('setTranslate', this);
				},
				*/
				setTransition: function() {
					// console.log('setTransition', this);
					/*
					var x = 73 - 5 + (Math.random() * 10);
					var y = 24;
					var r = 18 - 5 + (Math.random() * 10);
					console.log(x, y, r)
					dynamics.animate(element[0].querySelector('.fico'), {
						rotateZ: '-' + r + 'deg',
						translateX: '-' + x + '%',
						translateY: '-' + y + '%',
					}, {
						type: dynamics.bezier,
						points: [{
							"x": 0,
							"y": 0,
							"cp": [{
								"x": 0.462, "y": -0.877
							}]
						}, {
							"x": 1,
							"y": 1,
							"cp": [{
								"x": 0.538, "y": 1.899
							}]
						}],
					});
					*/
				},
			},
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/
			/*
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			*/
		};
	}

	static factory() {
		return new SwiperHeroDirective();
	}

}

SwiperHeroDirective.factory.$inject = [];

export class SwiperTileDirective extends SwiperDirective {

	constructor() {
		super();
		this.options = {
			speed: 600,
			parallax: true,
			autoplay: 5000,
			loop: true,
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
		return new SwiperTileDirective();
	}

}

SwiperTileDirective.factory.$inject = [];

export class SwiperSlideItemDirective {

	constructor(
		$timeout
	) {
		this.$timeout = $timeout;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		if (scope.$last === true) {
			this.$timeout(() => {
				scope.$emit('swiperSlideItemLast', element);
			});
		}
	}

	static factory($timeout) {
		return new SwiperSlideItemDirective($timeout);
	}

}

SwiperSlideItemDirective.factory.$inject = ['$timeout'];
