/* jshint esversion: 6 */

import { BehaviorSubject, from } from "rxjs";
import GtmService from '../gtm/gtm.service';
import { API_DEV } from './api.service';

export default class WishlistService {

	constructor(
		$http,
		PromiseService,
		StorageService,
		ApiService
	) {
		this.$http = $http;
		this.promise = PromiseService;
		this.storage = StorageService;
		this.api = ApiService;
		this.count$ = WishlistService.count$;
		const count = this.wishlist.length;
		// console.log('WishlistService', this.storage);
	}

	get wishlist() {
		if (!this.wishlist_) {
			const wishlist = this.storage.get('wishlist');
			this.wishlist_ = wishlist || [];
			WishlistService.count$.next(this.wishlist_.length);
		}
		return this.wishlist_;
	}

	set wishlist(wishlist) {
		this.wishlist_ = wishlist || [];
		this.storage.set('wishlist', this.wishlist_);
		WishlistService.count$.next(this.wishlist_.length);
	}

	indexOf(item) {
		if (item) {
			const index = this.wishlist.reduce((p, c, i) => {
				if (p === -1) {
					return c.id === item.id && c.coId === item.coId ? i : p;
				} else {
					return p;
				}
			}, -1);
			return index;
		} else {
			return -1;
		}
	}

	has(item) {
		return this.indexOf(item) !== -1;
	}

	add(item) {
		return this.promise.make((promise) => {
			const wishlist = this.wishlist;

			GtmService.push({
				event: 'addWishlist',
				wish_name: item.name || item.coId,
				wish_type: item.typeName || item.type
			});

			wishlist.push({ id: item.id, coId: item.coId, type: item.type, typeName: item.typeName, name: item.name });
			this.wishlist = wishlist;
			promise.resolve(true);
		});
	}

	remove(item) {
		return this.promise.make((promise) => {
			const index = this.indexOf(item);
			const wishlist = this.wishlist;

			GtmService.push({
				event: 'removeWishlist',
				wish_name: wishlist[index].name || wishlist[index].coId,
				wish_type: wishlist[index].typeName || wishlist[index].type
			});

			wishlist.splice(index, 1);
			this.wishlist = wishlist;
			promise.resolve(false);
		});
	}

	toggle(item) {
		if (this.has(item)) {
			return this.remove(item);
		} else {
			return this.add(item);
		}
	}

	clearAll() {
		return from(this.promise.make((promise) => {
			const wishlist = [];
			this.wishlist = wishlist;
			promise.resolve(wishlist);
		}));
	}

	get() {
		if (!API_DEV) {
			return from(this.$http.post('', this.wishlist).then(success => {
				return success;
			}));
		} else {
			return from(this.$http.get('data/moodboard.json').then(success => {
				if (success.data) {
					this.wishlist = success.data;
				}
				return success;
			}));
		}
	}

	static factory($http, PromiseService, StorageService, ApiService) {
		return new WishlistService($http, PromiseService, StorageService, ApiService);
	}

}

WishlistService.count$ = new BehaviorSubject(0);

WishlistService.factory.$inject = ['$http', 'PromiseService', 'LocalStorageService', 'ApiService'];
