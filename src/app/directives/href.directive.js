/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class HrefDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		if (node.nodeName.toLowerCase() === 'link') {
			return;
		}
		if (attributes.target === '_blank') {
			return;
		}
		const href = attributes.href;
		const absolute = /^(http:|https:|\/\/)/.test(href);
		const domain = this.getDomain(href);
		const currentDomain = this.getDomain(window.location.href);
		if (absolute && domain !== currentDomain) {
			return;
		}
		if (window.location.href.indexOf(href) !== -1) {
			node.classList.add('active');
		} else {
			node.classList.remove('active');
		}
		const onClick = (event) => {
			event.preventDefault();
			event.stopImmediatePropagation();
			if (href === '#') {
				return;
			}
			const title = node.innerText;
			scope.$emit('onNavigationShouldFetch', { title, href });
		};
		node.addEventListener('click', onClick);
		/*
		scope.$on('onNavigationEnded', function($scope, $href) {
			if (href === $href) {
				node.classList.add('active');
			} else {
				node.classList.remove('active');
			}
		});
		*/
		element.on('$destroy', () => {
			node.removeEventListener('click', onClick);
		});
		return;
	}

	getDomain(text) {
		const domainRegexp = /([[a-zA-Z0-9-_]+\.]*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11})/;
		const matches = text.match(domainRegexp);
		return matches && matches.length > 1 ? matches[1] : null;
	}

	static factory() {
		return new HrefDirective();
	}

}

HrefDirective.factory.$inject = [];
