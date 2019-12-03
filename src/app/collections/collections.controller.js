/* jshint esversion: 6 */

import GtmService from '../gtm/gtm.service';
const GTM_CAT = 'collezioni';

class CollectionsCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.brands = window.brands || [];
		this.initialFilters = window.initialFilters || null;
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
		// this.filteredReferences = this.references.slice();
		// this.updateFilterStates();
		// console.log(this.filters);
		// console.log(this.brands);
	}

	test() {
		this.test = true;
		this.applyFilters(false);
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		// console.log('CollectionsCtrl.deserializeFilters', filters);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'collections':
					filter.doFilter = (item, value) => {
						return item.id === value;
					};
					break;
				default:
					filter.doFilter = (item, value) => {
						return item.features.indexOf(value) !== -1;
					};
			}
			filter.options.unshift({
				label: filter.placeholder,
				value: null,
			});
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
			filter.value = selectedOption.value;
			filter.placeholder = selectedOption.label;
		});
		return filters;
	}

	serializeFilters() {
		let filters = {};
		let any = false;
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			if (filter.value !== null) {
				filters[x] = filter.value;
				any = true;
			}
		});
		if (!any) {
			filters = this.initialFilters ? {} : null;
		}
		// console.log('CollectionsCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters(serialize) {
		/*
		const filters = Object.keys(this.filters).map((x) => {
			return Object.assign({ type: x }, this.filters[x]);
		}).filter(x => x.value !== null);
		*/
		if (serialize !== false) this.serializeFilters();
		const { filteredBrands, resultCounts, totalCounts } = this.getFilteredBrands();
		// console.log(filteredBrands, filters);
		if (this.test) {
			filteredBrands.forEach(brand => brand.collections.forEach(collection => {
				collection.size = (1 + Math.floor(Math.random() * 6));
				if (collection.size < 4) {
					collection.size = 1;
				} else if (collection.size < 6) {
					collection.size = 2;
				} else {
					collection.size = 3;
				}
			}));
		}

		/*
		const order = [3, 2, 2, 1, 1, 1];
		let i = 0;
		filteredBrands.forEach(brand => {
			brand.collections.sort((a, b) => {
				const size = order[i % order.length];
				console.log(size);
				if (a.size === size) {
					i++;
					return -1;
				}
				if (b.size === size) {
					i++;
					return 1;
				}
				return 0;
			});
			// console.log(brand.collections.map(x => x.size).join(','));
		});
		*/

		filteredBrands.forEach(brand => {
			brand.collections = this.getSortedPattern(brand.collections);
		});

		this.filteredBrands = [];
		this.$timeout(() => {
			this.filteredBrands = filteredBrands;
			this.resultCounts = resultCounts;
			this.totalCounts = totalCounts;
			this.updateFilterStates();
			// delayer for image update
		}, 50);
		GtmService.pageViewFilters(GTM_CAT, this.filters);
	}

	getSortedSize(items) {
		items.sort((a, b) => {
			return b.size - a.size;
		});
		// console.log(items.map(x => x.size).join(','));
		return items;
	}

	getSortedPattern(items) {
		const order = [3, 2, 1, 2, 1, 1, 1, 2, 3, 1, 2, 1];
		let sorted = [],
			i = 0;
		while (items.length) {
			const size = order[i % order.length];
			const item = items.find(x => x.size === size);
			if (item) {
				items.splice(items.indexOf(item), 1);
				sorted.push(item);
			} else {
				sorted.push(items.shift());
			}
			i++;
		}
		console.log(sorted.map(x => x.size).join(','));
		return sorted;
	}

	getFilteredBrands(skipFilter) {
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		const filteredBrands = filters.length ? [] : this.brands;
		let resultCounts = 0,
			totalCounts = 0;
		if (filters.length) {
			this.brands.map(x => Object.assign({}, x)).forEach(brand => {
				const filteredCollections = [];
				brand.collections.forEach(collection => {
					let has = true;
					filters.forEach(filter => {
						if (filter !== skipFilter) {
							has = has && filter.doFilter(collection, filter.value);
						}
					});
					if (has) {
						filteredCollections.push(collection);
						resultCounts++;
					}
					totalCounts++;
				});
				// console.log(has, collection, filters);
				if (filteredCollections.length) {
					brand.collections = filteredCollections;
					filteredBrands.push(brand);
				}
			});
		}
		return { filteredBrands, resultCounts, totalCounts };
	}

	updateFilterStates() {
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			const { filteredBrands, resultCounts, totalCounts } = this.getFilteredBrands(filter);
			const collections = [].concat.apply([], filteredBrands.map(x => x.collections));
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < collections.length && !has) {
						const collection = collections[i];
						has = filter.doFilter(collection, option.value);
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
		item = item || filter.options[0];
		filter.value = item.value;
		filter.placeholder = item.label;
		this.applyFilters();
		this.$scope.$broadcast('onCloseDropdown');
	}

	removeFilter(filter) {
		this.setFilter(null, filter);
	}

}

CollectionsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default CollectionsCtrl;
