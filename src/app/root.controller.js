/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';
// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';
// import Highway from '@dogstudio/highway';
// import PageTransition from './highway/page-transition';

class RootCtrl {

	constructor(
		$scope,
		$compile,
		$location,
		$timeout,
		ApiService
	) {
		this.$scope = $scope;
		this.$compile = $compile;
		this.$location = $location;
		this.$timeout = $timeout;
		this.ApiService = ApiService;
	}

	onInit(brand) {
		this.brand = brand;
		this.$scope.onScroll = (event) => {
			const scrolled = event.scrollTop > 100;
			if (this.scrolled !== scrolled) {
				this.$timeout(() => {
					this.scrolled = scrolled;
				});
			}
		};
		// this.setHighway();
		this.initCustomNavigation();
		this.$timeout(() => {
			this.init = true;
		}, 1000);
	}

	getClasses() {
		const classes = {};
		classes[this.brand] = true;
		if (this.init) {
			classes.init = true;
		}
		return classes;
	}

	toggleBrand(event) {
		const brands = ['atlas-concorde', 'atlas-concorde-solution', 'atlas-concorde-usa', 'atlas-concorde-russia'];
		const i = (brands.indexOf(this.brand) + 1) % brands.length;
		this.brand = brands[i];
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	initCustomNavigation() {
		this.$scope.$on('onNavigationShouldFetch', (scope, { title, href }) => {
			console.log('onNavigationShouldFetch', title, href);
			// window.location.assign(href);
			// return;
			/*
			if (window.history && typeof window.history.pushState !== 'undefined') {
				history.pushState(null, title, href);
			} else {
				window.location.assign(href);
				return;
			}
			*/
			// this.$location.state({ title, href });
			this.$location.path(href);
			const wrapper = document.querySelector('[data-router-wrapper]');
			const wrapperElement = angular.element(wrapper);
			const from = document.querySelector('[data-router-view]');
			const fromElement = angular.element(from);
			const transitionOut = (from, done) => {
				TweenLite.to(from, 0.35, {
					opacity: 0,
					overwrite: 'all',
					onComplete: () => {
						done();
					}
				});
			};
			const transitionIn = (from, to, done) => {
				TweenLite.set(to, { opacity: 0, minHeight: from.offsetHeight });
				// from.remove();
				TweenLite.to(to, 0.35, {
					opacity: 1,
					delay: 0.5,
					overwrite: 'all',
					onComplete: () => {
						TweenLite.set(to, { minHeight: 0 });
						done();
					}
				});
			};
			const onTransitionInDidEnd = () => {
				setTimeout(() => {
					this.$scope.$broadcast('onNavigationEnded', href);
				}, 200);
			};
			const onTransitionOutDidEnd = () => {
				fetch(href)
					.then((response) => response.text())
					.then((html) => {
						fromElement.remove();
						window.scrollTo(0, 0);
						/*
						window.scroll({
							top: 0,
							left: 0,
							behavior: 'smooth'
						});
						*/
						var parser = new DOMParser();
						var doc = parser.parseFromString(html, "text/html");
						var view = doc.querySelector('.view').innerHTML;
						/*
						if (window.history && typeof window.history.replaceState !== 'undefined') {
							history.replaceState(view, title, href);
						}
						*/
						const to = from.cloneNode(false);
						to.innerHTML = view;
						const toElement = angular.element(to);
						// const scope = element.scope();
						this.$compile(toElement.contents())(this.$scope);
						wrapperElement.append(toElement);
						this.$timeout(() => {
							transitionIn(from, to, onTransitionInDidEnd);
						});
						console.log('fetched');
					}).catch(function(error) {
						console.log('Failed to fetch page: ', error);
					});
			};
			transitionOut(from, onTransitionOutDidEnd);
		});
	}

	hasHash(hash) {
		return window.location.hash.indexOf(hash) !== -1;
	}

	setHighway() {
		return;
		this.$timeout(() => {
			const H = new Highway.Core({
				transitions: {
					default: PageTransition,
				}
			});
			H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
				H.detach(H.links);
				console.log('NAVIGATE_IN', location);
				this.$timeout(() => {
					const element = angular.element(to.view);
					const scope = element.scope();
					this.$compile(element.contents())(scope);
					this.$timeout(() => {
						// console.log(scope, element, element.contents());
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
					}, 200);
				});
			});
			/*
			H.on('NAVIGATE_END', ({ from, to, trigger, location }) => {
				setTimeout(() => {
					document.querySelector('.view').scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'start'
					});
					if (window.scroll) {
						window.scroll({
							top: 0,
							left: 0,
							behavior: 'smooth'
						});
					} else {
						window.scrollTo(0, 0);
					}
				}, 200);
			});
			*/
		}, 200);
	}

}

RootCtrl.$inject = ['$scope', '$compile', '$location', '$timeout', 'ApiService'];

export default RootCtrl;
