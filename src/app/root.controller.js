/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';
// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';
import Highway from '@dogstudio/highway';
import PageTransition from './highway/page-transition';

class RootCtrl {

	constructor(
		$scope,
		$compile,
		$timeout,
		ApiService
	) {
		this.$scope = $scope;
		this.$compile = $compile;
		this.$timeout = $timeout;
		this.ApiService = ApiService;
		this.onInit();
	}

	hasHash(hash) {
		return window.location.hash.indexOf(hash) !== -1;
	}

	onInit() {
		this.$scope.onScroll = (event) => {
			const scrolled = event.scrollTop > 100;
			if (this.scrolled !== scrolled) {
				this.$timeout(() => {
					this.scrolled = scrolled;
				});
			}
		};
		this.setHighway();
	}

	setHighway() {
		this.$timeout(() => {
			const H = new Highway.Core({
				transitions: {
					default: PageTransition,
				}
			});
			H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
				H.detach(H.links);
				// console.log('NAVIGATE_IN', location);
				this.$timeout(() => {
					const element = angular.element(to.view);
					const scope = element.scope();
					// console.log(scope, element, element.contents());
					this.$compile(element.contents())(scope);
					this.$timeout(() => {
						const links = document.querySelectorAll('a:not([target]):not([data-router-disabled])');
						H.links = links;
						H.attach(links);
						links.forEach(x => {
							x.classList.remove('active');
							if (x.href === location.href) {
								x.classList.add('active');
							}
						});
						/*
						// link prefetch
						Quicklink({
							el: to.view
						});
						*/
					}, 100);
				});
			});
			H.on('NAVIGATE_END', ({ from, to, trigger, location }) => {
				setTimeout(() => {
					document.querySelector('.view').scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'start'
					});
					/*
					if (window.scroll) {
						window.scroll({
							top: 0,
							left: 0,
							behavior: 'smooth'
						});
					} else {
						window.scrollTo(0, 0);
					}
					*/
				}, 500);
			});
		});
	}
}

RootCtrl.$inject = ['$scope', '$compile', '$timeout', 'ApiService'];

export default RootCtrl;
