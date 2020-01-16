export default class OverOnDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const selector = attributes.overOn;
		const target = node.querySelector(selector);
		const onOver = (event) => {
			node.classList.add('over');
		}
		const onOut = (event) => {
			node.classList.remove('over');
		}
		if (target) {
			target.addEventListener('mouseover', onOver);
			target.addEventListener('mouseleave', onOut);
			scope.$on('$destroy', () => {
				target.removeEventListener('mouseover', onOver);
				target.removeEventListener('mouseleave', onOut);
			})
		}
	}

	static factory() {
		return new OverOnDirective();
	}

}

OverOnDirective.factory.$inject = [];
