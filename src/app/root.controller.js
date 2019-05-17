/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class RootCtrl {

	constructor(
		$scope,
		$timeout,
		DomService,
		ApiService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.domService = DomService;
		this.apiService = ApiService;
	}

	onInit(brand) {
		this.brand = brand;
		this.webglEnabled = this.domService.hasWebglSupport();
		/*
		this.domService.smoothScroll$('.page').subscribe((top) => {
			// console.log(top);
		});
		*/
		this.$scope.onScroll = (event) => {
			// console.log(event.scroll.direction, event.intersection);
			const scrolled = event.scroll.scrollTop > 40;
			if (this.scrolled !== scrolled || this.direction !== event.scroll.direction) {
				this.$timeout(() => {
					this.scrolled = scrolled;
					this.direction = event.scroll.direction;
				});
			}
		};
		this.$timeout(() => {
			this.init = true;
			const view = document.querySelector('.view');
			TweenMax.to(view, 0.6, {
				opacity: 1,
				delay: 0,
				overwrite: 'all'
			});
		}, 1000);
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
		if (node) {
			TweenMax.set(node, { maxHeight: 0 });
			return Promise.resolve();
		} else {
			return Promise.resolve();
		}
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
	}

	onDroppedIn(node) {
		return new Promise((resolve, reject) => {
			const items = [].slice.call(node.querySelectorAll('.submenu__item'));
			TweenMax.set(items, { opacity: 0 });
			TweenMax.set(node, { maxHeight: 0 });
			TweenMax.to(node, 0.3, {
				maxHeight: '100vh',
				ease: Expo.easeOut,
				delay: 0.0,
				overwrite: 'all',
				onComplete: () => {
					TweenMax.staggerTo(items, 0.35, {
						opacity: 1,
						stagger: 0.07,
						delay: 0.0,
						onComplete: () => {

						}
					});
				}
			});
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

RootCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default RootCtrl;
