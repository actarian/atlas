import GtmService from '../gtm/gtm.service';

const GTM_EVENT = 'ricerca-homepage';

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
	}

	setFilter(item, filter) {
		filter = filter || window.filters.collections;
		this.$scope.$broadcast('onCloseDropdown');
		item = item || filter.options[0];
		filter.value = item.value;

		if (filter === this.looks) {
			this.track('collections-_look-Effetto' + item.key);
		} else {
			if (filter === this.collections) {
				this.track('collections-' + item.key + '-');
			}
		}

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

	track(queryhp) {
		GtmService.push({
			"queryhp": queryhp,
			"event": GTM_EVENT
		});
	}
}

EffectsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

export default EffectsCtrl;
