/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class ValidateDirective {

	constructor(
		$filter
	) {
		this.$filter = $filter;
		this.require = 'ngModel';
	}

	link(scope, element, attributes, model) {
		const type = attributes.validate;
		const format = attributes.format || '';
		const precision = attributes.precision || 2;
		let focus = false;
		// console.log('validate', type);
		switch (type) {
			case 'date':
			case 'datetime':
			case 'datetime-local':
				model.$formatters.push(function(value) {
					if (value) {
						return $filter('date')(value, format);
					} else {
						return null;
					}
				});
				break;
			case 'number':
				model.$parsers.unshift(function(value) {
					let valid = false;
					if (value !== undefined && value !== "") {
						valid = String(value).indexOf(Number(value).toString()) !== -1; // isFinite(value); //
						value = Number(value);
						model.$setValidity('number', valid);
						if (valid) {
							model.$setValidity('positive', value >= 0.01);
							if (attributes.min !== undefined) {
								model.$setValidity('range', value >= Number(attributes.min));
							}
							if (attributes.max !== undefined) {
								model.$setValidity('range', value <= Number(attributes.max));
							}
						}
					} else {
						valid = true;
						value = Number(value);
						model.$setValidity('number', true);
						model.$setValidity('positive', true);
						if (attributes.min !== undefined) {
							model.$setValidity('range', true);
						}
						if (attributes.max !== undefined) {
							model.$setValidity('range', true);
						}
					}
					return value;
				});
				model.$formatters.push(function(value) {
					if (value) {
						return $filter('number')(value, precision) + ' ' + format;
					} else {
						return null;
					}
				});
				break;
			case 'anynumber':
				model.$parsers.unshift(function(value) {
					let valid = false;
					if (value !== undefined && value !== "") {
						valid = String(value).indexOf(Number(value).toString()) !== -1; // isFinite(value); //
						value = Number(value);
						model.$setValidity('number', valid);
						if (valid) {
							if (attributes.min !== undefined) {
								model.$setValidity('range', value >= Number(attributes.min));
							}
							if (attributes.max !== undefined) {
								model.$setValidity('range', value <= Number(attributes.max));
							}
						}
					} else {
						valid = true;
						value = Number(value);
						model.$setValidity('number', true);
						if (attributes.min !== undefined) {
							model.$setValidity('range', true);
						}
						if (attributes.max !== undefined) {
							model.$setValidity('range', true);
						}
					}
					return value;
				});
				model.$formatters.push(function(value) {
					if (value || value === 0) {
						return $filter('number')(value, precision) + ' ' + format;
					} else {
						return null;
					}
				});
				break;
		}

		const onFocus = () => {
			focus = true;
			if (format) {
				element[0].value = model.$modelValue || null;
				if (!model.$modelValue) {
					model.$setViewValue(null);
				}
			}
		};

		const doBlur = () => {
			if (format && !model.$invalid) {
				switch (type) {
					case 'date':
					case 'datetime':
					case 'datetime-local':
						element[0].value = model.$modelValue ? $filter('date')(model.$modelValue, format) : ' ';
						break;
					default:
						element[0].value = model.$modelValue ? $filter('number')(model.$modelValue, precision) + ' ' + format : ' ';
						break;
				}
			}
		};

		const onBlur = () => {
			focus = false;
			doBlur();
		};

		const addListeners = () => {
			element.on('focus', onFocus);
			element.on('blur', onBlur);
		};

		const removeListeners = () => {
			element.off('focus', onFocus);
			element.off('blur', onBlur);
		};

		scope.$on('$destroy', function() {
			removeListeners();
		});

		addListeners();
	}

	static factory($filter) {
		return new ValidateDirective($filter);
	}

}

ValidateDirective.factory.$inject = ['$filter'];
