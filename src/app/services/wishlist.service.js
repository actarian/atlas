/* jshint esversion: 6 */

export default class WishlistService {

	constructor(
		PromiseService,
		StorageService,
		ApiService
	) {
		this.promise = PromiseService;
		this.storage = StorageService;
		this.api = ApiService;
		console.log('WishlistService', this.storage);
	}

	get wishlist() {
		if (!this.wishlist_) {
			const wishlist = this.storage.get('wishlist');
			this.wishlist_ = wishlist || [];
		}
		return this.wishlist_;
	}

	set wishlist(wishlist) {
		this.wishlist_ = wishlist || [];
		this.storage.set('wishlist', this.wishlist_);
	}

	indexOf(item) {
		const index = this.wishlist.reduce((p, c, i) => {
			if (p === -1) {
				return c.id === item.id && c.type === item.type ? i : p;
			} else {
				return p;
			}
		}, -1);
		return index;
	}

	has(item) {
		return this.indexOf(item) !== -1;
	}

	add(item) {
		return this.promise.make((promise) => {
			const wishlist = this.wishlist;
			wishlist.push({ id: item.id, type: item.type });
			this.wishlist = wishlist;
			promise.resolve(true);
		});
	}

	remove(item) {
		return this.promise.make((promise) => {
			const index = this.indexOf(item);
			const wishlist = this.wishlist;
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

	static factory(PromiseService, StorageService, ApiService) {
		return new WishlistService(PromiseService, StorageService, ApiService);
	}

}

WishlistService.factory.$inject = ['PromiseService', 'LocalStorageService', 'ApiService'];
