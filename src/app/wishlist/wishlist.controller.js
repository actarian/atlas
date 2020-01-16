

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export const MOOD_TYPES = Object.freeze({
	Tile: 1,
	Horizontal: 2,
	Vertical: 3,
	Card: 4,
	Decor: 5,
});

export const ITEMS_PER_PAGE = 20;

class WishlistCtrl {

	constructor(
		$scope,
		$timeout,
		WishlistService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.wishlistService = WishlistService;
		this.items = [];
		this.moodTypes = MOOD_TYPES;
		this.unsubscribe = new Subject();
		this.wishlistService.count$.pipe(
			takeUntil(this.unsubscribe)
		).subscribe(count => this.count = count);
		$scope.$on('destroy', () => {
			// console.log('destroy');
			this.unsubscribe.next();
			this.unsubscribe.complete();
		});
		this.load();
	}

	load() {
		this.wishlistService.get().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(
			success => {
				// console.log('WishlistCtrl.load', success);
				if (success) {
					let items = success.data.slice();
					let wishlist = this.wishlistService.wishlist;

					items.forEach(item => {
						const index = this.wishlistService.indexOf(item);

						if (index >= 0) {
							item.name = wishlist[index].name;
							item.typeName = wishlist[index].typeName;
						}
					});

					/* FAKE */
					/*
					while (items.length < 200) {
						items = items.concat(items);
					}
					items.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
					*/
					/* FAKE */
					this.items = [];
					this.visibleItems = [];
					this.maxItems = ITEMS_PER_PAGE;
					this.$timeout(() => {
						this.items = items;
						this.visibleItems = items.slice(0, this.maxItems);
					}, 50);
				}
			},
			error => console.log('WishlistCtrl.load.error', error)
		);
	}

	clearAll() {
		this.wishlistService.clearAll().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(
			success => {
				this.items = [];
				this.visibleItems = [];
				this.maxItems = ITEMS_PER_PAGE;
			},
			error => console.log('WishlistCtrl.clearAll.error', error)
		);
	}

	onScroll(event) {
		if (event.rect.bottom < event.windowRect.bottom) {
			// console.log('more!');
			if (!this.busy && this.maxItems < this.items.length) {
				this.$timeout(() => {
					this.busy = true;
					this.$timeout(() => {
						this.maxItems += ITEMS_PER_PAGE;
						this.visibleItems = this.items.slice(0, this.maxItems);
						this.busy = false;
						// console.log(this.visibleItems.length);
					}, 1000);
				}, 0);
			}
		}
	}

	print() {
		return window.print();
		/*
		const iframe = document.createElement('iframe');
		iframe.onload = function() {
			console.log('onload');
			this.contentWindow.print();
			iframe.parentNode.removeChild(iframe);
		};
		iframe.style.width = '768px';
		iframe.src = window.location.href + '?printable';
		document.body.appendChild(iframe);
		*/
	}

}

WishlistCtrl.$inject = ['$scope', '$timeout', 'WishlistService'];

export default WishlistCtrl;
