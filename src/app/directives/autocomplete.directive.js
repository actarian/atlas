/* jshint esversion: 6 */


import HasDropdownDirective from "./has-dropdown.directive";

export default class AutocompleteDirective {

	constructor(
		$timeout
	) {
		this.$timeout = $timeout;
		this.restrict = 'A';
		this.scope = {
			filter: '=selectWithAutocomplete',
			handler: '=',
			onSetItem: '=?',
			onRemoveItem: '=?',
		};
		this.template = `
		<div class="dropdown">
			<ul class="nav nav--select">
				<li ng-repeat="item in items track by $index" ng-class="{ active: item.value == filter.value, disabled: item.disabled }">
					<span class="option" ng-class="{ 'option--picture': item.image }" ng-click="setItem(item)">
						<img ng-src="{{item.image}}" ng-if="item.image" />
						<span ng-bind="item.label"></span>
					</span>
				</li>
			</ul>
		</div>
		<label class="label" ng-bind="filter.label"></label>
		<div class="control control--select" ng-class="{ selected: filter.value }">
			<div class="input">
				<svg class="icon icon--search" ng-if="!filter.value"><use xlink:href="#search"></use></svg>
				<svg class="icon icon--close" ng-if="filter.value" ng-click="removeItem()"><use xlink:href="#close"></use></svg>
				<input type="text" class="value" ng-model="autocomplete.query" ng-model-options="{ debounce: 200 }" ng-disabled="filter.value" placeholder="{{filter.placeholder}}" ng-change="onChange($event)" ng-click="onClick($event)"></input>
				<svg class="icon icon--arrow-down"><use xlink:href="#arrow-down"></use></svg>
			</div>
		</div>
		`;
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const input = node.querySelector('input');
		const uid = HasDropdownDirective.dropDownUid++;
		const autocomplete = scope.autocomplete = { query: null };
		const filter = scope.filter;
		scope.items = scope.filter.options;
		node.initialFocus = null;
		// scope.$parent.hasDropdown = null;
		scope.setItem = (item) => {
			filter.value = item.value;
			autocomplete.query = null;
			if (scope.handler) {
				scope.handler.setFilter(item, filter);
			}
		};
		scope.removeItem = (item) => {
			filter.value = null;
			autocomplete.query = null;
			if (scope.handler) {
				scope.handler.removeFilter(filter);
			}
		};
		scope.onChange = (event) => {
			autocomplete.results = filter.options.filter(x => x.label.toLowerCase().indexOf(autocomplete.query.toLowerCase()) !== -1);
			if (autocomplete.results) {
				scope.items = autocomplete.results;
				scope.$parent.hasDropdown = uid;
				node.initialFocus = true;
			} else {
				scope.items = filter.options;
				scope.$parent.hasDropdown = null;
			}
			// console.log('onChange', autocomplete.query, autocomplete.results);
		};
		const onClickInput = (event) => {
			event.stopPropagation();
			// console.log('onClickInput', event);
		};
		const onClick = (event) => {
			const clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)
			if (clickedInside) {
				node.initialFocus = true;
				this.$timeout(() => {
					if (scope.$parent.hasDropdown === uid) {
						scope.$parent.hasDropdown = null;
					} else {
						scope.$parent.hasDropdown = uid;
					}
					scope.items = filter.options;
					autocomplete.query = null;
					autocomplete.results = [];
				});
				// console.log(node, clickedInside, scope.$parent.hasDropdown);
			} else if (node.initialFocus !== null) {
				node.initialFocus = false;
				this.$timeout(() => {
					if (scope.$parent.hasDropdown === uid) {
						scope.$parent.hasDropdown = null;
						scope.items = filter.options;
						autocomplete.query = null;
						autocomplete.results = [];
					}
				});
			}
		};
		scope.$parent.$watch('hasDropdown', (value) => {
			// console.log('hasDropdown', value, uid);
			if (scope.$parent.hasDropdown === uid) {
				node.classList.add('opened');
			} else {
				node.classList.remove('opened');
			}
		});
		const addListeners = () => {
			input.addEventListener('click', onClickInput);
			document.addEventListener('click', onClick);
			// element.on('click', onClick);
		};
		const removeListeners = () => {
			input.removeEventListener('click', onClickInput);
			document.removeEventListener('click', onClick);
			// element.off('click', onClick);
		};
		addListeners();
		element.on('$destroy', () => {
			removeListeners();
		});
	}

	static factory($timeout) {
		return new AutocompleteDirective($timeout);
	}

}

AutocompleteDirective.factory.$inject = ['$timeout'];
