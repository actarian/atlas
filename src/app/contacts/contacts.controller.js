/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

class ContactsCtrl {

	constructor(
		$scope,
		$timeout,
		$http,
		StateService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$http = $http;
		this.data = window.data || {};
		this.model = {};
		this.state = StateService.getState();
		this.state.ready();
	}

	onSubmit() {
		console.log('ContactsCtrl.onSubmit', this.model);
		if (this.state.busy()) {
			this.$http.post('/WS/wsForms.asmx/SaveForm', this.model).then(
				success => {

				},
				error => {
					this.error = error;
				}
			).finally(() => {
				this.state.ready();
			});
			/*
			this.$timeout(() => {
				this.state.ready();
			}, 2000);
			*/
		}
	}

}

ContactsCtrl.$inject = ['$scope', '$timeout', '$http', 'StateService'];

export default ContactsCtrl;
