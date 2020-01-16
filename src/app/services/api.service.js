

import { from } from 'rxjs';

export const API_DEV = window.location.port === '6001' || window.location.host === 'actarian.github.io';
export const API_HREF = API_DEV ? 'https://atlasconcorde.wslabs.it' : '';

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
					if (!API_DEV) {
						return from(this.$http.post('', this.wishlist));
					} else {
						return from(this.$http.get('data/moodboard.json').then(success => {
							if (success.data) {
								return success.data;
							}
						}));
					}
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
					if (!API_DEV) {
						return from($http.post('', filters));
					} else {
						return from($http.get('data/moodboard.json'));
					}
				},
			},
			storeLocator: {
				all: () => {
					if (!API_DEV) {
						return $http.get(API_HREF + '/api/store/json');
					} else {
						return $http.get('data/store-locator.json');
					}
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

ApiService.API_DEV = API_DEV;
