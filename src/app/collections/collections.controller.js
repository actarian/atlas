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
		// sorting alphabetically
		/*
		this.brands.forEach(brand => {
			if (brand.collections) {
				brand.collections.sort(function(a, b) {
					if (a.title < b.title) { return -1; }
					if (a.title > b.title) { return 1; }
					return 0;
				})
			}
		});
		*/
		this.initialFilters = window.initialFilters || null;
		this.deserializeFilters(this.initialFilters);
		this.applyFilters(false);
		// this.filteredReferences = this.references.slice();
		// this.updateFilterStates();
		// console.log(this.filters);
		// console.log(this.brands);
	}

	deserializeFilters(initialFilter) {
		const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
		console.log('CollectionsCtrl.deserializeFilters', locationFilters);

		if (Object.keys(locationFilters).length > 0) {
			// window.onload = () => {
			setTimeout(() => {
				const filtersNode = document.querySelector('.section--filters');
				console.log(filtersNode);
				if (filtersNode) {
					this.scrollIntoView(filtersNode);
				}
			}, 150);
			// }
		}

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

	getFilteredBrands(skipFilter) {
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		const filteredBrands = [];
		let resultCounts = 0;
		const totalCounts = this.brands.reduce((total, brand) => {
			return total + brand.collections.length;
		}, 0);
		const looks = this.filters.looks.options.filter(x => x.value);
		this.brands.map(x => Object.assign({}, x)).forEach(brand => {
			const collections = [];
			brand.looks = looks.map(x => {
				const look = Object.assign({}, x);
				look.collections = brand.collections.filter(collection => {
					if (this.filters.looks.value && x.value !== this.filters.looks.value) {
						return false;
					}
					let has = this.filters.looks.doFilter(collection, look.value);
					filters.forEach(filter => {
						if (filter !== skipFilter) {
							has = has && filter.doFilter(collection, filter.value);
						}
					});
					if (has && collections.indexOf(collection) === -1) {
						collections.push(collection);
					}
					return has;
				});
				return look;
			}).filter(x => x.collections.length); // .filter(x => x.collections.length)
			// console.log(has, collection, filters);
			resultCounts += collections.length;
			if (brand.looks.length) {
				filteredBrands.push(brand);
			}
		});
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

	scrollIntoView(node) {
		const curtop = (document.body.scrollTop || document.documentElement.scrollTop);
		const top = curtop + node.getBoundingClientRect().top;
		window.scroll(0, top);
	}

}

CollectionsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default CollectionsCtrl;
