import GtmService from './gtm.service';

export default class GtmCollectionDirective {

	constructor() {
		this.restrict = 'A';
		this.scope = {
			item: '=gtmCollection',
		};
	}

	link(scope, element, attributes, controller) {
		const node = element[0];

		const onClick = () => {
			const actionField = { list: scope.item.list };
			const product = Object.assign({}, scope.item);
			delete product.list;

			GtmService.push({
				event: 'collectionClick',
				ecommerce: {
					click: {
						actionField,
						products: [product]
					}
				}
			});
		}

		node.addEventListener('click', onClick);

		scope.$on('$destroy', () => node.removeEventListener('click', onClick));
	}

	static factory() {
		return new GtmCollectionDirective();
	}

}

GtmCollectionDirective.factory.$inject = [];
