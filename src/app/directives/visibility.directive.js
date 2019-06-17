/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { filter, first } from 'rxjs/operators';
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
		const subscription = this.domService.visibility$(node).pipe(
			filter(visible => visible),
			first()
		).subscribe(visible => {
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
