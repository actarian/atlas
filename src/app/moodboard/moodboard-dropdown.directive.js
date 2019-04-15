/* jshint esversion: 6 */
/* global window, document, angular, TweenMax, TimelineMax */

export default class MoodboardDropdownDirective {

	constructor(
		$compile
	) {
		this.$compile = $compile;
		this.restrict = 'A';
		this.template = `
<span has-dropdown>
	<span class="dropdown">
		<ul class="nav nav--select">
			<li ng-repeat="item in filter.options track by $index" ng-class="{ active: filter.value == item.value, disabled: item.disabled }">
				<span class="option" ng-class="{ 'option--picture': item.image }" ng-click="setFilter(item, filter)">
					<img ng-src="{{item.image}}" ng-if="item.image" />
					<span ng-bind="item.label"></span>
				</span>
			</li>
		</ul>
	</span>
	<span class="moodboard__value">{{filter.placeholder}}</span>
</span>
`;
		// this.require = 'ngModel';
		this.scope = {
			filter: '=?moodboardDropdown',
		};
	}

	link(scope, element, attributes, controller) {
		// console.log('MoodboardDropdownDirective', this.filter);
		scope.setFilter = (item, filter) => {
			item = item || filter.options[0];
			filter.value = item.value;
			filter.placeholder = item.label;
			if (typeof filter.doFilter === 'function') {
				filter.doFilter(item, item.value);
			}
		};
		scope.removeFilter = (filter) => {
			this.setFilter(null, filter);
		};
		element.on('$destroy', () => {});
	}

	static factory($compile) {
		return new MoodboardDropdownDirective($compile);
	}

}

MoodboardDropdownDirective.factory.$inject = ['$compile'];
