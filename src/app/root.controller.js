/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';
// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';
import Highway from '@dogstudio/highway';
import PageTransition from './transitions/transitions';

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
		console.log(this.$scope);
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
			H.on('NAVIGATE_END', (event) => {
				H.detach(H.links);
				this.$timeout(() => {
					const element = angular.element(event.to.view);
					const scope = element.scope();
					// console.log(scope, element, element.contents());
					this.$compile(element.contents())(scope);
					this.$timeout(() => {
						H.attach(document.querySelectorAll('[href]'));
						/*
						// link prefetch
						Quicklink({
							el: to.view
						});
						*/
						/*
						setTimeout(() => {
							document.querySelector('.view').scrollIntoView({
								behavior: 'smooth',
								block: 'start',
								inline: 'start'
							});
						}, 500);
						*/
					}, 250);
				});
			});
		});
	}
}

RootCtrl.$inject = ['$scope', '$compile', '$timeout', 'ApiService'];

export default RootCtrl;
