import GtmService from './gtm.service';

export default class GtmFormDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const form_name = attributes["gtmFormName"];

		if (form_name) {
			scope.$root.$on('formsubmit', () => {
				const obj = {
					event: 'formsubmit',
					form_name
				};

				// Task ID 34904 problema tracciamento form
				if (scope.c && scope.c.data && scope.c.model) {
					let elem;

					try {
						if (scope.c.model.contactType) {
							elem = scope.c.data.contactTypes.filter(_ => scope.c.model.contactType === _.id);
							if (elem.length)
								obj.contactType = elem[0].key;
						}
					} catch (e) {}

					try {
						if (scope.c.model.contactReason) {
							elem = scope.c.data.contactReasons.filter(_ => scope.c.model.contactReason === _.id);
							if (elem.length)
								obj.contactReason = elem[0].key;
						}
					} catch (e) {}

					try {
						if (scope.c.model.qualification) {
							elem = scope.c.data.qualification.filter(_ => scope.c.model.qualification === _.id);
							if (elem.length)
								obj.qualifica = elem[0].key;
						}
					} catch (e) {}
				}

				GtmService.push(obj);
			});
		}
	}

	static factory() {
		return new GtmFormDirective();
	}

}

GtmFormDirective.factory.$inject = [];
