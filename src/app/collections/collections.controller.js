/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

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
		// this.updateFilterStates(this.filteredReferences);
		// console.log(this.filters);
		// console.log(this.brands);
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
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		const filteredBrands = filters.length ? [] : this.brands;
		if (filters.length) {
			this.brands.map(x => Object.assign({}, x)).forEach(brand => {
				const filteredCollections = [];
				brand.collections.forEach(collection => {
					let has = true;
					filters.forEach(filter => {
						has = has && filter.doFilter(collection, filter.value);
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
		this.filteredBrands = [];
		this.$timeout(() => {
			this.filteredBrands = filteredBrands;
			this.updateFilterStates(filteredBrands);
			// delayer for image update
		}, 50);
	}

	updateFilterStates(brands) {
		const collections = [].concat.apply([], brands.map(x => x.collections));
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
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
