/* jshint esversion: 6 */


class ReferencesCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.references = window.references || [];
		this.deserializeFilters();
		this.applyFilters();
	}

	deserializeFilters() {
		const locationFilters = this.locationService.deserialize('filters') || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'collections':
					filter.doFilter = (item, value) => {
						return item.collections.indexOf(value) !== -1;
					};
					break;
				case 'countries':
					filter.doFilter = (item, value) => {
						return item.countryId === value;
					};
					break;
				default:
					filter.doFilter = (item, value) => {
						return item.features.indexOf(value) !== -1;
					};
			}
			filter.options.unshift({
				label: this.filters[x].placeholder,
				value: null,
			});
			const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
			filter.value = selectedOption.value;
			filter.placeholder = selectedOption.label;
		});
		return filters;
	}

	serializeFilters() {
		const filters = {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			if (filter.value !== null) {
				filters[x] = filter.value;
			}
		});
		// console.log('ReferenceCtrl.serializeFilters', filters);
		this.locationService.serialize('filters', filters);
		return filters;
	}

	applyFilters() {
		this.serializeFilters();
		const filters = Object.keys(this.filters).map((x) => this.filters[x]).filter(x => x.value !== null);
		let filteredReferences = this.references.slice();
		// console.log(filteredReferences);
		if (filters.length) {
			filteredReferences = filteredReferences.filter(reference => {
				let has = true;
				filters.forEach(filter => {
					has = has && filter.doFilter(reference, filter.value);
				});
				return has;
			});
		}
		// console.log(filteredReferences, filters);
		this.filteredReferences = [];
		this.$timeout(() => {
			this.filteredReferences = filteredReferences;
			this.updateFilterStates(filteredReferences);
			// delayer for image update
		}, 50);
	}

	updateFilterStates(references) {
		// console.log('updateFilterStates', references);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < references.length && !has) {
						const reference = references[i];
						has = filter.doFilter(reference, option.value);
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

ReferencesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default ReferencesCtrl;
