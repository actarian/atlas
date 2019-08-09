/* jshint esversion: 6 */


import GtmService from '../gtm/gtm.service';

export default class VisibilityDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const subscription = this.domService.firstVisibility$(node).subscribe(visible => {
			// console.log('visibility', attributes.visibility, node.classList);
			const gtmEvent = {
				event: 'ElementVisibilityCustomEvent',
				element: attributes.visibility,
				classes: node.getAttribute('class'),
			};
			// console.log(gtmEvent);
			GtmService.push(gtmEvent);
		});
		element.on('$destroy', () => {
			subscription.unsubscribe();
		});
	}

	static factory(DomService) {
		return new VisibilityDirective(DomService);
	}

}

VisibilityDirective.factory.$inject = ['DomService'];
