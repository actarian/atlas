/* jshint esversion: 6 */


export default class ControlMessagesDirective {

	constructor() {
		this.restrict = 'E';
		this.templateUrl = 'templates/forms/messages.html';
		this.transclude = {
			'message': '?messageItems',
		};
	}

	link(scope, element, attributes, model) {

	}

	static factory() {
		return new ControlMessagesDirective();
	}

}

ControlMessagesDirective.factory.$inject = [];
