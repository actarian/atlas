/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class HasDropdownDirective {

	constructor(
		$timeout
	) {
		this.$timeout = $timeout;
		this.restrict = 'A';
		this.scope = false;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const uid = HasDropdownDirective.dropDownUid++;
		node.initialFocus = null;
		const consumer = attributes.hasDropdownConsumer !== undefined ? scope.$eval(attributes.hasDropdownConsumer) : null;
		// scope.hasDropdown = null;
		const onClick = (event) => {
			// console.log(event);
			const clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)
			if (clickedInside) {
				node.initialFocus = true;
				if (consumer) {
					const dropdown = node.querySelector('[dropdown]');
					if (scope.hasDropdown === uid) {
						consumer.onDroppedOut(dropdown);
					} else {
						consumer.onDroppedIn(dropdown);
					}
					// console.log(consumer, dropdown);
				}
				this.$timeout(() => {
					if (scope.hasDropdown === uid) {
						scope.hasDropdown = null;
					} else {
						scope.hasDropdown = uid;
					}
				});
			} else if (node.initialFocus !== null) {
				node.initialFocus = false;
				if (consumer) {
					const dropdown = node.querySelector('[dropdown]');
					consumer.onDroppedOut(dropdown);
					// console.log(consumer, dropdown);
				}
				this.$timeout(() => {
					if (scope.hasDropdown === uid) {
						scope.hasDropdown = null;
					}
				});
			}
		};
		const onShowHide = (value) => {
			if (scope.hasDropdown === uid) {
				node.classList.add('opened');
			} else {
				node.classList.remove('opened');
			}
		};
		scope.$watch('hasDropdown', onShowHide);
		scope.$on('onNavigationTransitionIn', () => {
			console.log('onNavigationTransitionIn');
			scope.hasDropdown = null;
			onShowHide();
			if (consumer) {
				const dropdown = node.querySelector('[dropdown]');
				consumer.onDroppedOut(dropdown);
				// console.log(consumer, dropdown);
			}
		});
		const addListeners = () => {
			document.addEventListener('click', onClick);
		};
		const removeListeners = () => {
			document.removeEventListener('click', onClick);
		};
		addListeners();
		element.on('$destroy', () => {
			removeListeners();
		});
	}

	static factory($timeout) {
		return new HasDropdownDirective($timeout);
	}

}

HasDropdownDirective.dropDownUid = 0;

HasDropdownDirective.factory.$inject = ['$timeout'];
