/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class ContactsCtrl {

	constructor(
		$scope,
		$timeout,
		StateService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.data = window.data || {};
		this.model = {};
		this.state = StateService.getState();
		this.state.ready();
	}

	onSubmit() {
		console.log('ContactsCtrl.onSubmit', this.model);
		if (this.state.busy()) {
			this.$timeout(() => {
				this.state.ready();
			}, 2000);
		}
	}

}

ContactsCtrl.$inject = ['$scope', '$timeout', 'StateService'];

export default ContactsCtrl;
