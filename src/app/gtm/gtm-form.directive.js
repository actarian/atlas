


import GtmService from './gtm.service';

export default class GtmFormDirective {

	constructor() {
		this.restrict = 'A';
	}
	
	link(scope, element, attributes, controller) {
		const form_name = attributes["gtmFormName"];

		if (form_name) {
			scope.$root.$on('formsubmit', () => {
				GtmService.push({
					event: 'formsubmit',
					form_name
				});
			});
		}
	}
	

	static factory() {
		return new GtmFormDirective();
	}

}

GtmFormDirective.factory.$inject = [];
