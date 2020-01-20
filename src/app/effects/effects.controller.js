class EffectsCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.collectionsUrl = window.collectionsUrl;
		this.filters = window.filters || {};
		this.collections = this.filters.collections || { options: [] };
		this.looks = this.filters.looks || { options: [] };
		console.log(this.filters);
	}

	setFilter(item, filter) {
		this.$scope.$broadcast('onCloseDropdown');
		item = item || filter.options[0];
		filter.value = item.value;
		this.navToCollections();
	}

	navToCollections() {
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
		const serialized = this.locationService.serialize_('filters', filters);
		window.location.href = this.collectionsUrl + '?q=' + serialized;
	}

}

EffectsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default EffectsCtrl;
