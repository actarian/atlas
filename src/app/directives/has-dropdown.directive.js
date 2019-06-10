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
		let opened = null;
		const consumer = attributes.hasDropdownConsumer !== undefined ? scope.$eval(attributes.hasDropdownConsumer) : null;
		// scope.hasDropdown = null;
		const onClick = (event) => {
			if (opened === null) {
				opened = true;
				addDocumentListeners();
				if (consumer) {
					const dropdown = node.querySelector('[dropdown]');
					consumer.onDroppedIn(dropdown);
					/*
					if (scope.hasDropdown === uid) {
						// consumer.onDroppedOut(dropdown);
					} else {
						consumer.onDroppedIn(dropdown);
					}
					// console.log(consumer, dropdown);
					*/
				}
				this.$timeout(() => {
					scope.hasDropdown = uid;
					/*
					if (scope.hasDropdown === uid) {
						// scope.hasDropdown = null;
					} else {
						scope.hasDropdown = uid;
					}
					*/
				});
			}
		};
		const onDocumentClick = (event) => {
			const clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)
			if (!clickedInside) {
				closeDropdown();
			}
		};
		const onShowHide = (value) => {
			/*
			if (uid === 4) {
				console.log('onShowHide', scope.hasDropdown, uid);
			}
			*/
			if (scope.hasDropdown === uid) {
				node.classList.add('opened');
			} else {
				node.classList.remove('opened');
			}
		};
		scope.$watch('hasDropdown', onShowHide);
		const closeDropdown = () => {
			if (opened !== null) {
				removeDocumentListeners();
				this.$timeout(() => {
					opened = null;
					if (consumer) {
						const dropdown = node.querySelector('[dropdown]');
						consumer.onDroppedOut(dropdown);
						// console.log(consumer, dropdown);
					}
					if (scope.hasDropdown === uid) {
						scope.hasDropdown = null;
					}
				});
			}
		};
		scope.$on('onNavigateOut', closeDropdown);
		scope.$on('onNavigationTransitionIn', closeDropdown);
		const addListeners = () => {
			node.addEventListener('click', onClick);
		};
		const addDocumentListeners = () => {
			document.addEventListener('click', onDocumentClick);
		};
		const removeListeners = () => {
			node.removeEventListener('click', onClick);
		};
		const removeDocumentListeners = () => {
			document.removeEventListener('click', onDocumentClick);
		};
		addListeners();
		element.on('$destroy', () => {
			removeListeners();
			removeDocumentListeners();
		});
	}

	static factory($timeout) {
		return new HasDropdownDirective($timeout);
	}

}

HasDropdownDirective.dropDownUid = 0;

HasDropdownDirective.factory.$inject = ['$timeout'];
