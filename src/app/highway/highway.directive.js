/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */
import Highway from '@dogstudio/highway';
import PageTransition from './page-transition';
// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';

export default class HighwayDirective {

	constructor(
		$timeout,
	) {
		this.$timeout = $timeout,
			this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
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
		element.on('$destroy', () => {
			// !!!
			// H.destroy();
		});
	}

	static factory($timeout) {
		return new HighwayDirective($timeout);
	}

}

HighwayDirective.factory.$inject = ['$timeout'];
