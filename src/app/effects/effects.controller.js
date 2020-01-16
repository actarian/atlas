class EffectsCtrl {

	constructor(
		$scope,
		$timeout,
		LocationService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.locationService = LocationService;
		this.filters = window.filters || {};
		this.collections = this.filters.collections || { options: [] };
		this.looks = this.filters.looks || { options: [] };
		console.log(this.filters);
	}

	setFilter(item, filter) {
		/*
		item = item || filter.options[0];
		filter.value = item.value;
		filter.placeholder = item.label;
		*/
		this.$scope.$broadcast('onCloseDropdown');
	}

}

EffectsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default EffectsCtrl;
