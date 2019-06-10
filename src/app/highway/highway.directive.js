/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */
import Highway from '@dogstudio/highway';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import GtmService from '../gtm/gtm.service';
import CustomRenderer from './custom-renderer';
import PageTransition from './page-transition';
// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';

export default class HighwayDirective {

	constructor(
		$compile,
		$timeout
	) {
		this.$compile = $compile;
		this.$timeout = $timeout;
		this.restrict = 'A';
		this.link$ = new Subject();
	}

	onLink$() {
		return this.link$.pipe(
			debounceTime(50)
		);
	}

	link(scope, element, attributes, controller) {
		CustomRenderer.$compile = this.$compile;
		CustomRenderer.$timeout = this.$timeout;
		CustomRenderer.scope = scope;
		/*
		Highway.Core.prototype.pushState_ = Highway.Core.prototype.pushState;
		Highway.Core.prototype.pushState = () => {};
		*/
		const H = new Highway.Core({
			renderers: {
				view: CustomRenderer,
			},
			transitions: {
				view: PageTransition,
			}
		});
		this.H = H;
		CustomRenderer.H = H;
		scope.$on('onHrefNode', ($scope, node) => {
			this.link$.next();
		});
		const subscription = this.onLink$().subscribe(x => {
			// console.log('onLinks$');
			H.detach(H.links);
			const links = document.querySelectorAll('a:not([target]):not([data-router-disabled])');
			H.links = links;
			H.attach(links);
			links.forEach(x => {
				x.classList.remove('active');
				if (x.href === location.href) {
					x.classList.add('active');
				}
			});
		});
		const properties = H.cache.get(H.location.href);
		properties.view = scope.$root.firstView;
		H.cache.set(H.location.href, properties);
		H.on('NAVIGATE_OUT', ({ to, trigger, location }) => {
			scope.$broadcast('onNavigateOut', location);
		});
		H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
			// console.log('NAVIGATE_IN');
			H.detach(H.links);
		});
		/*
		H.on('NAVIGATE_END', ({ to, trigger, location }) => {
			console.log(document.title);
			// H.pushState_();
		});
		*/
		element.on('$destroy', () => {
			// H.destroy();
			subscription.unsubscribe();
		});
		/*
		const pushState = history.pushState;
		history.pushState = (...args) => {
			console.log('pushState', args, document.title);
			return pushState.apply(history, args);
		};
		*/
		GtmService.pageView();
	}

	static factory($compile, $timeout) {
		return new HighwayDirective($compile, $timeout);
	}

}

HighwayDirective.factory.$inject = ['$compile', '$timeout'];

/*

*/
