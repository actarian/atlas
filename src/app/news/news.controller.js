/* jshint esversion: 6 */


export const ITEMS_PER_PAGE = 9;

class NewsCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.news = window.news || [];
		this.filteredItems = [];
		// !!! FAKE
		while (this.news.length < 100) {
			this.news = this.news.concat(this.news);
		}
		// !!! FAKE
		this.deserializeFilters();
		this.applyFilters();
	}

	deserializeFilters() {
		const locationFilters = this.locationService.deserialize('filters') || {};
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			switch (x) {
				case 'categories':
					filter.doFilter = (item, value) => {
						return item.categoryId === value;
					};
					break;
				case 'years':
					filter.doFilter = (item, value) => {
						return item.year === value;
					};
					break;
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
		let filteredItems = this.news.slice();
		// console.log(filteredItems);
		if (filters.length) {
			filteredItems = filteredItems.filter(reference => {
				let has = true;
				filters.forEach(filter => {
					has = has && filter.doFilter(reference, filter.value);
				});
				return has;
			});
		}
		// console.log(filteredItems, filters);
		this.filteredItems = [];
		this.visibleItems = [];
		this.maxItems = ITEMS_PER_PAGE;
		this.$timeout(() => {
			this.filteredItems = filteredItems;
			this.visibleItems = filteredItems.slice(0, this.maxItems);
			this.updateFilterStates(filteredItems);
			// delayer for image update
		}, 50);
	}

	updateFilterStates(news) {
		// console.log('updateFilterStates', news);
		Object.keys(this.filters).forEach(x => {
			const filter = this.filters[x];
			filter.options.forEach(option => {
				let has = false;
				if (option.value) {
					let i = 0;
					while (i < news.length && !has) {
						const reference = news[i];
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
}

NewsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default NewsCtrl;
