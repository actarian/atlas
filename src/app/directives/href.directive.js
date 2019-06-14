/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

const USE_HIGHWAY = true;

export default class HrefDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const onClick = () => {
			window.location.href = attributes.href;
		};
		if (USE_HIGHWAY) {
			if (attributes.routerDisabled === undefined) {
				scope.$emit('onHrefNode', node);
			} else {
				// console.log(attributes.routerDisabled, node);
				node.addEventListener('click', onClick);
			}
			return;
		} else {
			if (node.nodeName.toLowerCase() === 'link') {
				return;
			}
			if (attributes.target === '_blank') {
				return;
			}
			const onClick = (event) => {
				const href = attributes.href;
				const absolute = /^(http:|https:|\/\/)/.test(href);
				const domain = this.getDomain(href);
				const currentDomain = this.getDomain(window.location.href);
				if (absolute && domain !== currentDomain) {
					window.location.href = href;
					return;
				}
				// Se c'è un cambio di mercato, facciamo ricaricare la pagina
				const market = this.getMarket(href);
				const currentMarket = this.getMarket(window.location.href);
				// console.log('onNavigationShouldFetch', currentMarket, market);
				if (currentMarket !== null && market !== currentMarket) {
					window.location.href = href;
					return;
				}
				if (window.location.href.indexOf(href) !== -1) {
					node.classList.add('active');
				} else {
					node.classList.remove('active');
				}
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
		}
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

	getMarket(text) {
		const marketRegexp = /(^|[^\/])\/([^\/]+)/;
		const matches = text.match(marketRegexp);
		return matches && matches.length > 2 ? matches[2] : null;
	}

	static factory() {
		return new HrefDirective();
	}

}

HrefDirective.factory.$inject = [];
