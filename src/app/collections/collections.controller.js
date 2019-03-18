/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class CollectionsCtrl {

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
		this.brands = window.brands || [];
		console.log(this.brands);
		this.filteredBrands = this.brands;
	}

	closeNav() {
		return new Promise((resolve, reject) => {
			const node = document.querySelector(`.section--submenu.active`);
			if (node) {
				const items = [].slice.call(node.querySelectorAll('.submenu__item'));
				TweenMax.staggerTo(items.reverse(), 0.25, {
					opacity: 0,
					stagger: 0.05,
					delay: 0.0,
					onComplete: () => {
						TweenMax.to(node, 0.2, {
							maxHeight: 0,
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

	openNav(nav) {
		return new Promise((resolve, reject) => {
			const node = document.querySelector(`#nav-${nav} .section--submenu`);
			const items = [].slice.call(node.querySelectorAll('.submenu__item'));
			TweenMax.set(items, { alpha: 0 });
			TweenMax.set(node, { maxHeight: 0 });
			TweenMax.to(node, 0.2, {
				maxHeight: '100vh',
				delay: 0.0,
				overwrite: 'all',
				onComplete: () => {
					TweenMax.staggerTo(items, 0.35, {
						opacity: 1,
						stagger: 0.05,
						delay: 0.0,
						onComplete: () => {

						}
					});
				}
			});
		});
	}

	toggleFilter(id) {
		this.nav = (this.nav === id ? null : id);
		this.closeNav().then(() => {
			if (this.nav) {
				this.openNav(this.nav);
			}
		});
	}

}

CollectionsCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default CollectionsCtrl;
