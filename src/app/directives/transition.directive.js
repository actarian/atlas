/* jshint esversion: 6 */


export default class TransitionDirective {

	constructor(
		$compile,
		$location,
		$timeout
	) {
		this.$compile = $compile;
		this.$location = $location;
		this.$timeout = $timeout;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		this.$timeout(() => {
			const subscription = this.init(scope, element, attributes, controller);
			element.on('$destroy', () => {
				subscription.unsubscribe();
			});
		});
	}

	init(scope, element, attributes, controller) {
		scope.$on('onNavigationShouldFetch', (scope, { title, href }) => {
			console.log('onNavigationShouldFetch', title, href);
			this.menuOpened = false;
			this.menuProductOpened = false;
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
			scope.$broadcast('onNavigationStart', href);
			this.$location.path(href);
			const wrapper = document.querySelector('[data-router-wrapper]');
			const wrapperElement = angular.element(wrapper);
			const from = document.querySelector('[data-router-view]');
			const headerMenu = document.querySelector('.header__menu');
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
					scope.$broadcast('onNavigationEnded', href);
				}, 200);
			};
			const onTransitionOutDidEnd = () => {
				let fetchHref = href;
				const base = document.querySelector('base');
				const baseHref = base ? base.getAttribute('href') : '/';
				if (baseHref !== '/' && fetchHref.indexOf(baseHref) !== 0) {
					fetchHref = (baseHref + fetchHref).replace('//', '/');
				}
				fetch(fetchHref)
					.then((response) => response.text())
					.then((html) => {
						fromElement.remove();
						window.scrollTo(0, 0);
						scope.$broadcast('onNavigationTransitionIn', href);
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
						// console.log('fetched');
					}).catch(function(error) {
						console.log('Failed to fetch page: ', error);
					});
			};
			transitionOut(from, onTransitionOutDidEnd);
		});
	}

	static factory($compile, $location, $timeout) {
		return new TransitionDirective($compile, $location, $timeout);
	}

}

TransitionDirective.factory.$inject = ['$compile', '$location', '$timeout'];
