/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class CollectionsCtrl {

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
		this.filters = window.filters || {};
		this.brands = window.brands || [];
		console.log(this.filters, this.brands);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			if (x === 'collections') {
				filter.filterCollection = (collection, value) => {
					return collection.id === value;
				};
			} else {
				filter.filterCollection = (collection, value) => {
					return collection.features.indexOf(value) !== -1;
				};
			}
			filter.options.unshift({
				label: this.filters[x].placeholder,
				value: null,
			});
			filter.value = null;
		});
		this.updateStateFilters(this.brands);
		// console.log(this.filters);
		// console.log(this.brands);
	}

	doFilterBrands() {
		/*
		const filters = Object.keys(this.filters).map((x) => {
			return Object.assign({ type: x }, this.filters[x]);
		}).filter(x => x.value !== null);
		*/
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		const filteredBrands = filters.length ? [] : this.brands;
		if (filters.length) {
			this.brands.map(x => Object.assign({}, x)).forEach(brand => {
				const filteredCollections = [];
				brand.collections.forEach(collection => {
					let has = true;
					filters.forEach(filter => {
						has = has && filter.filterCollection(collection, filter.value);
					});
					if (has) {
						filteredCollections.push(collection);
					}
				});
				// console.log(has, collection, filters);
				if (filteredCollections.length) {
					brand.collections = filteredCollections;
					filteredBrands.push(brand);
				}
			});
		}
		// console.log(filteredBrands, filters);
		this.filteredBrands = filteredBrands;
		this.updateStateFilters(filteredBrands);
	}

	updateStateFilters(brands) {
		const collections = [].concat.apply([], brands.map(x => x.collections));
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < collections.length && !has) {
						const collection = collections[i];
						has = filter.filterCollection(collection, option.value);
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
		this.doFilterBrands();
	}

	removeFilter(filter) {
		this.setFilter(null, filter);
	}

}

CollectionsCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default CollectionsCtrl;
