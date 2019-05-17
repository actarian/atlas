/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

const formatLabel = function(string = '', prepend = '', expression = undefined) {
	const splitted = string.split(',');
	if (splitted.length > 1) {
		let formatted = splitted.shift();
		splitted.forEach((value, index) => {
			if (expression) {
				formatted = formatted.split('{' + index + '}').join('\' + ' + prepend + value + ' + \'');
			} else {
				formatted = formatted.split('{' + index + '}').join(prepend + value);
			}
		});
		if (expression) {
			return '\'' + formatted + '\'';
		} else {
			return formatted;
		}
	} else {
		return prepend + string;
	}
};

let uniqueId = 0;

let errorElements = [],
	to;

export default class ControlDirective {

	constructor(
		$parse,
		DomService
	) {
		this.$parse = $parse;
		this.domService = DomService;
		this.restrict = 'A';
		this.templateUrl = (element, attributes) => {
			var template = 'templates/forms/text.html';
			switch (attributes.control) {
				case 'checkbox':
					template = 'templates/forms/checkbox.html';
					break;
				case 'password':
					template = 'templates/forms/password.html';
					break;
				case 'select':
					template = 'templates/forms/select.html';
					break;
				case 'textarea':
					template = 'templates/forms/textarea.html';
					break;
			}
			return template;
		};
		this.scope = {
			ngModel: '=',
			required: '=',
			form: '@',
			title: '@',
			placeholder: '@',
			source: '=?',
			key: '@?',
			label: '@?',
		};
		this.require = 'ngModel';
		this.transclude = true;
		this.link = {
			pre: (scope, element, attributes, controller, transclude) => {
				this.linkMethod(scope, element, attributes, controller, transclude);
			}
		};

	}

	linkMethod(scope, element, attributes, controller, transclude) {
		const label = scope.label = (scope.label ? scope.label : 'name');
		const key = scope.key = (scope.key ? scope.key : 'id');
		if (attributes.control === 'select') {
			const filter = (attributes.filter ? '| ' + attributes.filter : '');
			const optionLabel = formatLabel(label, 'item.', true);
			scope.getOptions = () => {
				return attributes.number ?
					'item.' + key + ' as ' + optionLabel + ' disable when item.disabled for item in source ' + filter :
					optionLabel + ' disable when item.disabled for item in source ' + filter + ' track by item.' + key;
			};
		}
		const type = scope.type = attributes.control;
		const form = scope.form = scope.form || 'form';
		const title = scope.title = scope.title || 'untitled';
		const placeholder = scope.placeholder = scope.placeholder || title;
		const field = scope.field = title.replace(/[^0-9a-zA-Z]/g, "").split(' ').join('') + (++uniqueId);
		scope.format = attributes.format || null;
		scope.precision = attributes.precision || null;
		scope.validate = attributes.validate || attributes.control;
		scope.minLength = attributes.minLength || 0;
		scope.maxLength = attributes.maxLength || Number.POSITIVE_INFINITY;
		scope.min = attributes.min || null;
		scope.max = attributes.max || null;
		scope.options = this.$parse(attributes.options)(scope) || {};
		scope.focus = false;
		scope.visible = false;
		scope.onChange = (model) => {
			// console.log('ControlDirective.onChange');
			this.$parse(attributes.onChange)(scope.$parent);
		};
		scope.onFilter = (model) => {
			this.$parse(attributes.onFilter)(scope.$parent);
		};
		scope.getType = () => {
			let type = 'text';
			switch (attributes.control) {
				case 'password':
					type = scope.visible ? 'text' : 'password';
					break;
				default:
					type = attributes.control;
			}
			return type;
		};
		scope.onFocus = () => {
			scope.focus = true;
			// console.log('ControlDirective.onFocus', scope.focus);
		};
		scope.onBlur = () => {
			scope.focus = false;
			// console.log('ControlDirective.onBlur', scope.focus);
			this.scrollToError();
		};
		scope.getClasses = () => {
			const field = this.$parse(scope.form + '.' + scope.field)(scope.$parent);
			if (field) {
				const focus = scope.focus;
				const success = field.$valid;
				const form = this.$parse(scope.form)(scope.$parent);
				const error = field.$invalid && (form.$submitted || field.$touched);
				const empty = !field.$viewValue;
				if (error) {
					this.onError(element);
					if (scope.error !== error) {
						scope.error = error;
						this.scrollToError();
					}
				} else {
					scope.error = false;
				}
				return { focus, success, error, empty };
			}
		};
		scope.getMessages = () => {
			const form = this.$parse(scope.form)(scope.$parent);
			const field = this.$parse(scope.form + '.' + scope.field)(scope.$parent);
			return (form.$submitted || field.$touched) && field.$error;
		};
		scope.toggleVisibility = () => {
			scope.visible = !scope.visible;
		};
		scope.$on('onInvalid', () => {
			this.scrollToError();
		});
	}

	onError(element) {
		if (errorElements.indexOf(element) === -1) {
			errorElements.push(element);
		}
	}

	scrollToError() {
		if (errorElements.length) {
			if (to) {
				clearTimeout(to);
			}
			to = setTimeout(() => {
				const top = errorElements.reduce((previous, current, index, array) => {
					const node = current[0];
					return Math.min(previous, node.getBoundingClientRect().top);
				}, Number.POSITIVE_INFINITY);
				window.scroll({
					top: this.domService.scrollTop + top - 100,
					left: 0,
					behavior: 'smooth'
				});
				errorElements = [];
			}, 100);
		}
	}

	link(scope, element, attributes, controller) {}

	static factory($parse, DomService) {
		return new ControlDirective($parse, DomService);
	}

}

ControlDirective.factory.$inject = ['$parse', 'DomService'];
