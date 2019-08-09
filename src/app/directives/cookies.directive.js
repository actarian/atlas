/* jshint esversion: 6 */

export default class CookiesDirective {

	constructor(
		$timeout,
		StorageService
	) {
		this.$timeout = $timeout;
		this.storage = StorageService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const accept = () => {
			var dt = new Date();
			dt.setDate(dt.getDate() + 365);
			document.cookie = '_cookiepolicy=accept; path=/; expires=' + dt.toUTCString();
		};
		const node = element[0];
		const cookiesAccepted = this.storage.get('cookiesAccepted');
		if (cookiesAccepted) {
			node.classList.add('cookies-accepted');
		}
		scope.onAcceptCookies = (event) => {
			this.storage.set('cookiesAccepted', true);
			// accept();
			TweenMax.to(node, 0.5, {
				bottom: '-100%',
				ease: Power2.easeInOut,
				delay: 0.15,
				onComplete: () => {
					node.classList.add('cookies-accepted');
				}
			});
		};
	}

	static factory($timeout, StorageService) {
		return new CookiesDirective($timeout, StorageService);
	}

}

CookiesDirective.factory.$inject = ['$timeout', 'CookieService'];
