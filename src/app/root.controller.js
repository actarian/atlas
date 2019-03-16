/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

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
		this.webglEnabled = false;
		this.$scope.onScroll = (event) => {
			const scrolled = event.scrollTop > 40;
			if (this.scrolled !== scrolled) {
				this.$timeout(() => {
					this.scrolled = scrolled;
				});
			}
		};
		this.initCustomNavigation();
		this.$timeout(() => {
			this.init = true;
		}, 1000);
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
				TweenMax.to(from, 0.35, {
					opacity: 0,
					overwrite: 'all',
					onComplete: () => {
						done();
					}
				});
			};
			const transitionIn = (from, to, done) => {
				TweenMax.set(to, { opacity: 0, minHeight: from.offsetHeight });
				// from.remove();
				TweenMax.to(to, 0.35, {
					opacity: 1,
					delay: 0.5,
					overwrite: 'all',
					onComplete: () => {
						TweenMax.set(to, { minHeight: 0 });
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

	getClasses() {
		const classes = {};
		classes[this.brand] = true;
		if (this.init) {
			classes.init = true;
		}
		return classes;
	}

	toggleNav(id) {
		const nav = id || this.nav;
		this.nav = (this.nav === id ? null : id);
		if (nav) {
			const node = document.querySelector(`#nav-${nav} .section--submenu`);
			const items = [].slice.call(node.querySelectorAll('.submenu__item'));
			if (this.nav) {
				TweenMax.set(items, { alpha: 0 });
				TweenMax.set(node, { maxHeight: 0 });
				TweenMax.to(node, 0.4, {
					maxHeight: '100vh',
					// delay: 0.5,
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
				/*
				items.forEach((item, i) => TweenMax.to(item, 0.3, {
					alpha: 1,
					delay: 0.2 * i,
					overwrite: 'all',
				}));
				*/
			} else {
				console.log('remove', items);
				TweenMax.staggerTo(items.reverse(), 0.35, {
					opacity: 0,
					stagger: 0.05,
					delay: 0.0,
					onComplete: () => {
						TweenMax.to(node, 0.4, {
							maxHeight: 0,
							delay: 0.0,
						});
					}
				});
			}
		}
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

RootCtrl.$inject = ['$scope', '$compile', '$location', '$timeout', 'ApiService'];

export default RootCtrl;
