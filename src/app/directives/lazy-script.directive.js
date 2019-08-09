/* jshint esversion: 6 */


export default class LazyScriptDirective {

	constructor() {
		this.restrict = 'A';
		this.scope = false;
	}

	link(scope, element, attributes, controller) {
		// if (attributes.type === 'text/javascript-lazy') {
		if (attributes.src !== undefined) {
			fetch(attributes.src, {
				mode: 'no-cors'
			}).then(response => {
				const code = response.text();
				try {
					new Function(code)();
				} catch (error) {
					console.log('LazyScriptDirective.error', error);
				}
			});
		} else {
			const code = element.text();
			try {
				new Function(code)();
			} catch (error) {
				console.log('LazyScriptDirective.error', error);
			}
		}
		// }
		// element.on('$destroy', () => {});
	}

	static factory() {
		return new LazyScriptDirective();
	}

}

LazyScriptDirective.factory.$inject = [];
