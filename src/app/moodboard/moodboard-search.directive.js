/* jshint esversion: 6 */
/* global window, document, angular, MoodboardSearch, TweenMax, TimelineMax */

export default class MoodboardSearchDirective {

	constructor(
		$compile
	) {
		this.$compile = $compile;
		this.restrict = 'A';
		this.scope = {
			filters: '=moodboardSearch',
			model: '=model',
		};
	}

	link(scope, element, attributes, controller) {
		scope.filters = scope.filters || {};
		const node = element[0];
		let html = node.innerText;
		const keys = Object.keys(scope.filters);
		keys.forEach(x => {
			// console.log(x);
			html = html.replace(`$${x}$`, `<span class="moodboard__dropdown ${x}" moodboard-dropdown="filters.${x}"></span>`);
		});
		// console.log('MoodboardSearchDirective', html);
		node.innerHTML = html;
		this.$compile(element.contents())(scope);
		element.on('$destroy', () => {});
	}

	static factory($compile) {
		return new MoodboardSearchDirective($compile);
	}

}

MoodboardSearchDirective.factory.$inject = ['$compile'];
