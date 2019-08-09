/* jshint esversion: 6 */


function push_(event) {
	const dataLayer = window.dataLayer || [];
	dataLayer.push(event);
	console.log('GtmService.dataLayer', dataLayer);
}

export default class GtmService {

	static pageView() {
		return push_({
			event: 'PageViewCustomEvent',
			title: document.title,
			href: window.location.href,
			pathname: window.location.pathname,
			hostname: window.location.hostname,
		});
	}

	static push(event) {
		return push_(event);
	}

}
