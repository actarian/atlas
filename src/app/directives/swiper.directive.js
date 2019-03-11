/* global angular */

(function() {
	"use strict";

	var app = angular.module('app');

	app.directive('swiperHero', ['$parse', function($parse) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				function onSwiper() {
					// console.log('swiperHero');
					if (element.swiper) {
						element.swiper.update();
					} else {
						// var items = element[0].querySelectorAll('.swiper-slide');
						element.swiper = new Swiper(element, {
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
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
						});
						element.addClass('swiper-init');
					}
				}
				scope.$on('swiperSlideItemLast', function(slide) {
					// console.log('swiperSlideItemLast', element, slide);
					onSwiper();
				});
				onSwiper();
			}
		};
    }]);

	app.directive('swiperSlideItem', ['$timeout', function($timeout) {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				// console.log('swiperSlideItem', scope.$last);
				if (scope.$last === true) {
					$timeout(function() {
						scope.$emit('swiperSlideItemLast', element);
					});
				}
			}
		};
    }]);

}());
