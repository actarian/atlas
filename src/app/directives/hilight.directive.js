/* jshint esversion: 6 */


export default class HilightDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		let hilight, query;
		const update = () => {
			if (hilight) {
				if (query) {
					const index = hilight.toLowerCase().indexOf(query);
					if (index !== -1) {
						node.innerHTML = `${hilight.substring(0, index)}<span class="hilight">${hilight.substring(index, index + query.length)}</span>${hilight.substring(index + query.length, hilight.length)}`;
					} else {
						node.innerHTML = hilight;
					}
				} else {
					node.innerHTML = hilight;
				}
			}
			// console.log(hilight, query, node.innerHTML);
		};
		scope.$watch(attributes.hilight, (current, previous) => {
			// console.log('HilightDirective.hilight', current, previous);
			hilight = current;
			update();
		});
		scope.$watch(attributes.query, (current, previous) => {
			// console.log('HilightDirective.query', current, previous);
			query = current;
			update();
		});
		return;
	}

	static factory() {
		return new HilightDirective();
	}

}

HilightDirective.factory.$inject = [];
