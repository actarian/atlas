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
			html = html.replace(`$${x}$`, `<span class="moodboard__dropdown ${x}" moodboard-dropdown="filters.${x}" ng-click="animateOff()"></span>`);
		});
		// console.log('MoodboardSearchDirective', html);
		node.innerHTML = html;
		this.$compile(element.contents())(scope);
		const hasFilter = Object.keys(scope.filters).map(x => scope.filters[x]).find(x => x.value !== null) !== undefined;
		if (!hasFilter) {
			this.animateUnderlines(node);
		}
		scope.animateOff = () => {
			this.animateOff(node);
		};
		element.on('$destroy', () => {});
	}

	animateUnderlines(node) {
		this.animated = true;
		const values = [...node.querySelectorAll('.moodboard__underline')];
		values.forEach(x => {
			TweenMax.set(x, { transformOrigin: '0 50%', scaleX: 0 });
		});
		let i = -1;
		const animate = () => {
			i++;
			i = i % values.length;
			const u = values[i];
			TweenMax.set(u, { transformOrigin: '0 50%', scaleX: 0 });
			TweenMax.to(u, 0.50, {
				scaleX: 1,
				transformOrigin: '0 50%',
				delay: 0,
				ease: Power3.easeInOut,
				overwrite: 'all',
				onComplete: () => {
					TweenMax.set(u, { transformOrigin: '100% 50%', scaleX: 1 });
					TweenMax.to(u, 0.50, {
						scaleX: 0,
						transformOrigin: '100% 50%',
						delay: 1.0,
						ease: Power3.easeInOut,
						overwrite: 'all',
						onComplete: () => {
							animate();
						}
					});
				}
			});
		};
		animate();
	}

	animateOff(node) {
		if (this.animated) {
			this.animated = false;
			// console.log('animateOff');
			// TweenMax.killAll();
			const values = [...node.querySelectorAll('.moodboard__underline')];
			TweenMax.set(values, { transformOrigin: '0 50%', scaleX: 0 });
			TweenMax.to(values, 0.50, {
				scaleX: 1,
				transformOrigin: '0 50%',
				delay: 0,
				ease: Power3.easeInOut,
				overwrite: 'all',
			});
		}
	}

	static factory($compile) {
		return new MoodboardSearchDirective($compile);
	}

}

MoodboardSearchDirective.factory.$inject = ['$compile'];
