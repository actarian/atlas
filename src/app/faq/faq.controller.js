/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, takeUntil } from 'rxjs/operators';

class FaqCtrl {

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
		this.faqCategories = window.faqCategories || [];
		// eliminare!
		//this.faqCategories.forEach(x => x.items.forEach(i => Math.random() > 0.5 ? delete i.url : null));
		//
		this.filteredFaqCategories = this.faqCategories.slice();
		this.flags = {};
		this.unsubscribe = new Subject();
		$scope.$watch('$viewContentLoaded', () => {
			this.search$().pipe(
				takeUntil(this.unsubscribe)
			).subscribe((filteredFaqCategories) => {
				this.$timeout(() => {
					this.filteredFaqCategories = [];
					this.$timeout(() => {
						this.filteredFaqCategories = filteredFaqCategories;
					}, 50);
				});
			});
		});
		$scope.$on('destroy', () => {
			// console.log('destroy');
			this.unsubscribe.next();
			this.unsubscribe.complete();
		});
	}

	isOpen(id) {
		return this.flags[id];
	}

	toggle(id) {
		const flag = !this.flags[id];
		const node = document.querySelector(`#faq--${id} > .group--content`);
		if (flag) {
			TweenMax.set(node, { opacity: 0, maxHeight: 'none', display: 'block' });
			const offsetHeight = node.offsetHeight + 20;
			TweenMax.set(node, { maxHeight: 0 });
			TweenMax.to(node, 0.35, {
				opacity: 1,
				maxHeight: offsetHeight,
				overwrite: 'all',
				onComplete: () => {}
			});
		} else {
			TweenMax.to(node, 0.35, {
				opacity: 0,
				maxHeight: 0,
				overwrite: 'all',
				onComplete: () => {
					TweenMax.set(node, { display: 'none' });
				}
			});
		}
		this.flags[id] = flag;
	}

	navTo(category, event) {
		const node = document.querySelector(`#${category.slug}`);
		const top = this.domService.scrollTop + node.getBoundingClientRect().top - 100;
		window.scroll({
			top: top,
			left: 0,
			behavior: 'smooth'
		});
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	search$() {
		const node = document.querySelector('.control--search');
		return fromEvent(node, 'input').pipe(
			debounceTime(1000),
			map(function(event) {
				return event.target.value.toLowerCase();
			}),
			map(query => {
				this.query = query;
				this.faqCategories.forEach(x => x.items.forEach(i => i.opened = false));
				if (query !== '') {
					const filteredFaqCategories = this.faqCategories.map(x => Object.assign({}, x)).filter(category => {
						let has = false;
						let items = category.items.filter(item => {
							const hasTitle = item.title.toLowerCase().indexOf(query) !== -1;
							const hasAbstract = item.abstract.toLowerCase().indexOf(query) !== -1;
							item.opened = hasAbstract;
							this.flags[item.id] = item.opened;
							has = has || hasTitle || hasAbstract;
							return hasTitle || hasAbstract;
						});
						if (items.length) {
							category.items = items;
						} else if (category.title.toLowerCase().indexOf(query) !== -1) {
							items = category.items;
						}
						return items.length;
					});
					// console.log('FaqCtrl.search$', query, filteredFaqCategories);
					/*
					const node = document.querySelector('.section--faq');
					const top = node.getBoundingClientRect().top;
					window.scrollTo(0, top);
					*/
					return filteredFaqCategories;
				} else {
					this.flags = {};
					return this.faqCategories.slice();
				}
			}),
			shareReplay()
		);
	}

}

FaqCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default FaqCtrl;
