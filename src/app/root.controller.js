/* jshint esversion: 6 */

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

class RootCtrl {

	constructor(
		$scope,
		$timeout,
		DomService,
		ApiService,
		WishlistService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.domService = DomService;
		this.apiService = ApiService;
		this.wishlistService = WishlistService;
		this.unsubscribe = new Subject();
		this.wishlistService.count$.pipe(
			takeUntil(this.unsubscribe)
		).subscribe(count => {
			this.wishlistCount = count;
		});
		$scope.$on('destroy', () => {
			// console.log('destroy');
			this.unsubscribe.next();
			this.unsubscribe.complete();
		});
	}

	onScroll(event) {
		const scrolled = event.scroll.scrollTop > 40;
		const direction = event.scroll.direction;
		if (event.scroll.direction) {
			if (direction && (this.direction !== direction || this.scrolled !== scrolled)) {
				this.$timeout(() => {
					this.scrolled = scrolled;
					this.direction = direction;
				}, 1);
			}
		}
	}

	onInit(brand) {
		this.brand = brand;
		this.webglEnabled = false; // this.domService.hasWebglSupport();
		this.domService.addCustomRules();
		/*
		this.domService.smoothScroll$('.page').subscribe((top) => {
			// console.log(top);
		});
		*/
		this.$timeout(() => {
			this.init = true;
			const view = document.querySelector('.view');
			TweenMax.to(view, 0.6, {
				opacity: 1,
				delay: 0,
				overwrite: 'all'
			});
		}, 1000);
		this.$scope.$on('onDroppinIn', (scope, droppinIn) => {
			// console.log('onDroppinIn', droppinIn);
			this.$timeout(() => {
				this.droppinIn = droppinIn;
			});
		});
	}

	getClasses() {
		const classes = {};
		classes[this.brand] = true;
		if (this.init) {
			classes.init = true;
		}
		if (this.direction === -1) {
			classes['scrolled-up'] = true;
		}
		if (this.direction === 1) {
			classes['scrolled-down'] = true;
		}
		if (this.droppinIn) {
			classes['droppin-in'] = true;
		}
		return classes;
	}

	closeNav() {
		const node = document.querySelector(`.section--submenu.active`);
		return this.onDroppedOut(node);
	}

	openNav(nav) {
		const node = document.querySelector(`#nav-${nav} .section--submenu`);
		return this.onDroppedIn(node);
	}

	toggleNav(id) {
		this.nav = (this.nav === id ? null : id);
		this.closeNav().then(() => {
			if (this.nav) {
				this.openNav(this.nav);
			}
		});
	}

	onDroppedOut(node) {
		// console.log('onDroppedOut', node);
		if (node) {
			if (this.droppinIn) {
				TweenMax.set(node, { height: 0 });
				return Promise.resolve();
			} else {
				TweenMax.set(node, { overflow: 'hidden' });
				TweenMax.to(node, 0.6, {
					height: 0,
					ease: Expo.easeOut,
					overwrite: 'all',
					onComplete: () => {
						delete node.style.overflow;
						return Promise.resolve();
					}
				});
			}
		} else {
			return Promise.resolve();
		}
		/*
		return new Promise((resolve, reject) => {
			if (node) {
				const items = [].slice.call(node.querySelectorAll('.submenu__item'));
				TweenMax.staggerTo(items.reverse(), 0.25, {
					opacity: 0,
					stagger: 0.05,
					delay: 0.0,
					onComplete: () => {
						TweenMax.to(node, 0.2, {
							maxHeight: 0,
							ease: Expo.easeOut,
							delay: 0.0,
							onComplete: () => {
								resolve();
							}
						});
					}
				});
			} else {
				resolve();
			}
		});
		*/
	}

	onDroppedIn(node) {
		// console.log('onDroppedIn', node);
		return new Promise((resolve, reject) => {
			this.droppinIn = true;
			const items = [].slice.call(node.querySelectorAll('.submenu__item'));
			TweenMax.set(items, { opacity: 0 });
			TweenMax.set(node, { height: 'auto' });
			const mh = node.offsetHeight;
			TweenMax.set(node, { height: 0, overflow: 'hidden' });
			TweenMax.to(node, 0.8, {
				height: mh,
				ease: Expo.easeOut,
				delay: 0.0,
				overwrite: 'all',
				onComplete: () => {
					delete node.style.overflow;
					TweenMax.set(node, { height: 'auto' });
					// TweenMax.set(node, { clearProps: 'all' });
					if (items.length === 0) {
						this.droppinIn = false;
					}
				}
			});
			if (items.length) {
				TweenMax.staggerTo(items, 0.35, {
					opacity: 1,
					stagger: 0.07,
					delay: 0.5,
					onComplete: () => {
						this.droppinIn = false;
					}
				});
			}
		});
	}

	toggleBrand(event) {
		const brands = ['atlas-concorde', 'atlas-concorde-solution', 'atlas-concorde-usa', 'atlas-concorde-russia'];
		const i = (brands.indexOf(this.brand) + 1) % brands.length;
		this.brand = brands[i];
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	pad(index) {
		return index < 10 ? '0' + index : index;
	}

	hasHash(hash) {
		return window.location.hash.indexOf(hash) !== -1;
	}

}

RootCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService', 'WishlistService'];

export default RootCtrl;
