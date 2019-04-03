/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

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
				position: function(position) {
					return $http.get('/data/store-locator.json', position);
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
