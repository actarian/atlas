/* jshint esversion: 6 */


function push_(event) {
	const dataLayer = window.dataLayer || [];
	dataLayer.push(event);
	console.log('GtmService.dataLayer', event);
}

export default class GtmService {
	// Id da dare al tag script delle pagine con filtri.
	// Questo indica a Highway di non eseguire il PageView. Sarà il controller a farlo
	static FILTERS_SCRIPT_ID = 'script-listing';

	static pageView(pathname) {

		const obj = {
			event: 'PageViewCustomEvent',
			title: document.title,
			href: window.location.href,
			pathname: pathname || window.location.pathname,
			hostname: window.location.hostname,
		};

		Object.assign(obj, window.dataLayerData);

		return push_(obj);
	}

	static pageViewFilters(cat, filters) {

		const values = [];

		for (let key in filters) {
			let textValue = '';

			const filterValue = filters[key].value;
			if (filterValue) {
				const selectedOption = filters[key].options.find(option => option.value === filterValue);
				if (selectedOption) {
					textValue = selectedOption.key;
				}
			}

			values.push(encodeURIComponent(filters[key].key /* se array di filtri */ || key /* se oggetto filtro */) + '-' + encodeURIComponent(textValue));
		}

		const pathname = `?cat=${cat}&s=${values.join('_')}`;

		GtmService.pageView(window.location.pathname + pathname);
	}

	static push(event) {
		return push_(event);
	}

}
