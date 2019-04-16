/* jshint esversion: 6 */
/* global window, document, angular, Muuri, TweenMax, TimelineMax */

export class MuuriDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		scope.$on('lastItem', (slide) => {
			// console.log('MuuriDirective.lastItem', slide);
			this.onMuuri(scope, element, attributes);
		});
		element.on('$destroy', () => {
			if (element.muuri) {
				element.muuri.destroy();
			}
		});
		setTimeout(() => {
			this.onMuuri(scope, element, attributes);
		}, 1);
	}

	onMuuri(scope, element, attributes) {
		if (element.muuri) {
			const node = element[0];
			// const items = scope.$eval(attributes.muuri);
			const previousItems = element.muuri.getItems().map(x => x.getElement());
			// console.log('MuuriDirective.previousItems', previousItems);
			const items = [...node.querySelectorAll('.listing__item')];
			// console.log('MuuriDirective.newItems', items);
			const newItems = items.filter(x => previousItems.indexOf(x) === -1);
			const removeItems = previousItems.filter(x => items.indexOf(x) === -1);
			element.muuri.remove(removeItems);
			element.muuri.add(newItems);
			// element.muuri.refreshItems(items).layout();
		} else {
			element.muuri = new Muuri(element[0], {
				layoutDuration: 400,
				layoutEasing: 'ease',
				layout: {
					fillGaps: true,
					horizontal: false,
					alignRight: false,
					alignBottom: false,
					rounding: false
				}
			});
			element.addClass('muuri-init');
		}
	}

	static factory() {
		return new MuuriDirective();
	}

}

MuuriDirective.factory.$inject = [];
