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
			store: {
				data: function(storeId) {
					return $http.get('/store/store.data.json');
				},
				getById: function(storeId) {
					return $http.get('/store/store.json');
				},
				getDetailById: function(storeId) {
					return $http.get('/store/store.detail.json');
				},
			},
			reserve: {
				data: function(storeId) {
					return $http.get('/reserve/reserve.data.json');
				},
				days: function(storeId, from, to) {
					return $http.get('/reserve/days.json', { from: from, to: to });
				}
			},
		};
		Object.assign(this, api);
	}

	static factory($http) {
		return new ApiService($http);
	}

}

ApiService.factory.$inject = ['$http'];
