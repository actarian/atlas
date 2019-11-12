/* jshint esversion: 6 */

import { from } from 'rxjs';

const API_HREF = window.location.port === '6001' ? 'https://atlasconcorde.wslabs.it' : '';

export default class ApiService {

	constructor($http) {
		this.http = $http;
		const api = {
			advancedSearch: {
				get: () => {
					return from($http.get('data/advanced-search.json'));
					// return from($http.get(API_HREF + '/api/advanced-search/json'));
				},
			},
			wishlist: {
				get: () => {
					return from($http.get('data/moodboard.json'));
				},
				toggle: (item) => {
					item.added = !item.added;
					return Promise.resolve(item);
				},
				clearAll: () => {
					return Promise.resolve();
				},
			},
			moodboard: {
				filter: (filters) => {

					//var f = function (response) {
					//	const first = items.length === 0;
					//	items.push(...response.data);
					//	if (!first) {

					//		items.sort((a, b) => Math.random() > 0.5 ? 1 : -1);

					//		subject.next({ data: items });
					//		subject.complete();
					//	}
					//}

					//const subject = new Subject();

					//const items = [];

					//from($http.post('', filters)).subscribe(f, error => subject.error(error));
					//from($http.get('data/moodboard.json')).subscribe(f, error => subject.error(error));

					//return subject;
					return from($http.post('', filters));
					//return from($http.get('data/moodboard.json'));
				},
			},
			storeLocator: {
				all: () => {
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
