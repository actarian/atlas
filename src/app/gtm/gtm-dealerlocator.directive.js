

import GtmService from './gtm.service';

export default class gtmDealerLocatorDirective {

	constructor() {
		this.restrict = 'A';
		this.scope = {
			label: '=gtmDealerLocator'
		};
	}

	link(scope, element, attributes, controller) {
		const node = element[0];

		const onClick = () => {
			GtmService.push({
				event: 'dealerlocator',
				action: 'sidebar-click',
				label: scope.label
			});
		}

		node.addEventListener('click', onClick);

		element.on('$destroy', () => node.removeEventListener('click', onClick));
	}

	static factory() {
		return new gtmDealerLocatorDirective();
	}

}

gtmDealerLocatorDirective.factory.$inject = [];
