export default class ScrollToDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const onClick = () => {
			const selector = attributes.scrollTo;
			const target = document.querySelector(selector);
			if (target) {
				const top = target.getBoundingClientRect().top + this.domService.scrollTop - Number(attributes.offset || 0);
				if (!'scrollBehavior' in document.documentElement.style) {
					window.scrollTo(0, top);
				} else {
					window.scrollTo({ top, behavior: 'smooth' });
				}
			}
		}

		const addListeners = () => {
			element.on('click', onClick);
		};

		const removeListeners = () => {
			element.off('click', onClick);
		};

		scope.$on('$destroy', function() {
			removeListeners();
		});

		addListeners();
	}

	static factory(DomService) {
		return new ScrollToDirective(DomService);
	}

}

ScrollToDirective.factory.$inject = ['DomService'];
