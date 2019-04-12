/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

const API_HREF = window.location.port === '6001' ? 'https://atlasconcorde.wslabs.it' : '';

export default class ApiService {

	constructor($http) {
		this.http = $http;
		const api = {
			wishlist: {
				toggle: (item) => {
					item.added = !item.added;
					return Promise.resolve(item);
				},
			},
			storeLocator: {
				all: function all() {
					return $http.get(API_HREF + '/api/store/json');
					// return $http.get('data/store-locator.json');
				},
			},
		};
		Object.assign(this, api);
	}

	static factory($http) {
		return new ApiService($http);
	}

}

ApiService.factory.$inject = ['$http'];
