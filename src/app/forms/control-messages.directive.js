/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class ControlMessagesDirective {

	constructor() {
		this.restrict = 'E';
		this.templateUrl = 'templates/forms/messages.html';
		this.transclude = {
			'message': '?messageItems',
		};
	}

	link(scope, element, attributes, controller) {}

	static factory() {
		return new ControlMessagesDirective();
	}

}

ControlMessagesDirective.factory.$inject = [];