/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { of } from "rxjs";

export const ITEMS_PER_PAGE = 20;

class AdvancedSearchCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService,
		ApiService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.apiService = ApiService;
		this.items = [];
		this.filteredItems = [];
		this.filters = window.filters || [];
		this.selectedFilters = [];
		this.deserializeFilters();
		// !!!
		this.apiService.advancedSearch.get().subscribe(
			// this.fakeSearch$().subscribe(
			success => {
				let items = success.data;
				this.items = items;
				this.applyFilters();
			}
		);
	}

	deserializeFilters() {
		const locationFilters = this.locationService.deserialize('filters') || {};
		// console.log('AdvancedSearchCtrl.deserializeFilters', filters);
		this.filters.forEach(filter => {
			switch (filter.key) {
				case 'finish':
					filter.doFilter = (item, value) => {
						let has = false;
						const size = this.filters.find(x => x.key == 'size' && x.value !== null);
						item.minimals.forEach(x => {
							has = has || (x.finish.id === value && (!size || x.size.id === size.value));
						});
						return has;
					};
					break;
				case 'size':
					filter.doFilter = (item, value) => {
						let has = false;
						const finish = this.filters.find(x => x.key == 'finish' && x.value !== null);
						item.minimals.forEach(x => {
							has = has || (x.size.id === value && (!finish || x.finish.id === finish.value));
						});
						return has;
					};
					break;
				default:
					filter.doFilter = (item, value) => {
						return item.features.indexOf(value) !== -1;
					};
			}
			/*
			filter.options.unshift({
				label: filter.placeholder,
				value: null,
			});
			*/
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[filter.key] || null)));
			if (selectedOption) {
				filter.value = selectedOption.value;
				filter.placeholder = selectedOption.label;
			} else {
				filter.value = null;
				filter.placeholder = null;
			}
			// console.log(x, filters[x], filter.value);
		});
		return filters;
	}

	serializeFilters() {
		const filters = {};
		this.filters.forEach(filter => {
			if (filter.value !== null) {
				filters[filter.key] = filter.value;
			}
		});
		// console.log('AdvancedSearchCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(item, value) {
		// console.log('AdvancedSearchCtrl.applyFilters', this.filters);
		this.serializeFilters();
		const selectedFilters = this.filters.filter(x => x.value !== null);
		const finishFilter = this.filters.find(x => x.key == 'finish' && x.value !== null);
		const sizeFilter = this.filters.find(x => x.key == 'size' && x.value !== null);
		let filteredItems;
		if (selectedFilters.length) {
			filteredItems = this.items.filter(item => {
				let has = true;
				selectedFilters.forEach(filter => {
					has = has && filter.doFilter(item, filter.value);
				});
				return has;
			}).map(x => {
				const item = Object.assign({}, x);
				item.minimals = item.minimals.filter(x => {
					let has = true;
					has = has && (!finishFilter || x.finish.id === finishFilter.value) && (!sizeFilter || x.size.id === sizeFilter.value);
					return has;
				});
				return item;
			});
		} else {
			filteredItems = this.items.slice();
		}
		this.selectedFilters = selectedFilters;
		this.filteredItems = [];
		this.visibleItems = [];
		this.maxItems = ITEMS_PER_PAGE;
		this.$timeout(() => {
			this.filteredItems = filteredItems;
			this.visibleItems = filteredItems.slice(0, this.maxItems);
			this.updateFilterStates(filteredItems);
		}, 50);
	}

	updateFilterStates(brands) {
		this.filters.forEach(filter => {
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < this.filteredItems.length && !has) {
						const item = this.filteredItems[i];
						has = filter.doFilter(item, option.value);
						i++;
					}
				} else {
					has = true;
				}
				option.disabled = !has;
			});
			// console.log(filter.options);
		});
	}

	setFilter(item, filter) {
		filter.value = item.value;
		filter.placeholder = item.label;
		this.applyFilters();
	}

	removeFilter(filter) {
		filter.value = null;
		filter.placeholder = null;
		this.applyFilters();
	}

	removeAll() {
		this.filters.forEach(filter => {
			filter.value = null;
			filter.placeholder = null;
		});
		this.applyFilters();
	}

	onScroll(event) {
		if (event.rect.bottom < event.windowRect.bottom) {
			// console.log('more!');
			if (!this.busy && this.maxItems < this.filteredItems.length) {
				this.$timeout(() => {
					this.busy = true;
					this.$timeout(() => {
						this.maxItems += ITEMS_PER_PAGE;
						this.visibleItems = this.filteredItems.slice(0, this.maxItems);
						this.busy = false;
						// console.log(this.visibleItems.length);
					}, 1000);
				}, 0);
			}
		}
	}

	fakeSearch$(count = 2000) {
		const items = [];
		const collections = ['Marvel Dream', 'Marvel Edge', 'Boost'];
		const tiles = ['Imperial White', 'Royal Calacatta', 'Elegant Sable', 'Gris Supreme', 'Absolute Brown', 'Agata Azul', 'Gold Onyx', 'Red Luxury', 'Gris Clair'];
		const finishes = this.filters.find(x => x.key === 'finish').options;
		const sizes = this.filters.find(x => x.key === 'size').options;
		let UID = 1;
		while (items.length < count) {
			const collectionIndex = Math.floor(Math.random() * collections.length);
			const collectionName = collections[collectionIndex];
			const tileIndex = Math.floor(Math.random() * tiles.length);
			const tileName = tiles[tileIndex];
			const tileImage = `img/advanced-search/tile-0${tileIndex+1}.jpg`;
			const minimals = [];
			const count = 1 + Math.floor(Math.random() * 15);
			while (minimals.length < count) {
				const finish = finishes[Math.floor(Math.random() * finishes.length)];
				const size = sizes[Math.floor(Math.random() * sizes.length)];
				minimals.push({
					id: minimals.length + 1,
					url: '#',
					finish: {
						id: finish.value,
						name: finish.label
					},
					size: {
						id: size.value,
						name: size.label
					},
				});
			}
			const features = [];
			this.filters.forEach(filter => {
				if (filter.key !== 'finish' && filter.key !== 'size') {
					features.push(filter.options[Math.floor(Math.random() * filter.options.length)].value);
				}
			});
			items.push({
				id: UID++,
				collection: {
					id: collectionIndex + 1,
					name: collectionName,
				},
				tile: {
					id: tileIndex + 1,
					name: tileName,
					image: tileImage
				},
				minimals,
				features,
			});
		}
		// console.log(JSON.stringify(items));
		return of({ data: items });
	}
}

AdvancedSearchCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

export default AdvancedSearchCtrl;
