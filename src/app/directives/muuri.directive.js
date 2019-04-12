/* jshint esversion: 6 */
/* global window, document, angular, Muuri, TweenMax, TimelineMax */

const DEFAULT_MUURI_OPTIONS = {
	slidesPerView: 'auto',
	spaceBetween: 1,
	centeredSlides: true,
	loop: true,
	loopAdditionalSlides: 100,
	speed: 600,
	autoplay: 5000,
	keyboardControl: true,
	mousewheelControl: false,
	onSlideClick: function(muuri) {
		angular.element(muuri.clickedSlide).scope().clicked(angular.element(muuri.clickedSlide).scope().$index);
	},
	pagination: {
		el: '.muuri-pagination',
		clickable: true,
	},
};

export class MuuriDirective {

	constructor() {
		this.restrict = 'A';
		this.options = DEFAULT_MUURI_OPTIONS;
	}

	link(scope, element, attributes, controller) {
		scope.$on('lastItem', (slide) => {
			this.onMuuri(element);
		});
		element.on('$destroy', () => {
			if (element.muuri) {
				element.muuri.destroy();
			}
		});
		setTimeout(() => {
			this.onMuuri(element);
		}, 1);
	}

	onMuuri(element) {
		if (element.muuri) {
			element.muuri.update();
		} else {
			element.muuri = new Muuri(element[0], {
				layoutDuration: 400,
				layoutEasing: 'ease',
				layout: {
					fillGaps: true,
					horizontal: false,
					alignRight: false,
					alignBottom: false,
					rounding: false
				}
			});
			element.addClass('muuri-init');
		}
	}

	static factory() {
		return new MuuriDirective();
	}

}

MuuriDirective.factory.$inject = [];
