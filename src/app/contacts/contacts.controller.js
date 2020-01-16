


class ContactsCtrl {

	constructor(
		$scope,
		$location,
		$timeout,
		$http,
		StateService
	) {
		this.$scope = $scope;
		this.$location = $location;
		this.$timeout = $timeout;
		this.$http = $http;
		this.data = window.data || {};
		this.model = {};
		if (this.$location.search() && this.$location.search().email) {
			this.model.email = this.$location.search().email;
		}
		this.state = StateService.getState();
		this.state.ready();
	}

	setProvinces() {
		this.$timeout(() => {
			this.provinces = this.data.provinces.filter(x => x.idstato === this.model.country);
		});
	}

	onSubmit() {
		console.log('ContactsCtrl.onSubmit', this.model);
		if (this.state.busy()) {
			this.$http.post('/WS/wsForms.asmx/SaveForm', { datamodel: this.model }).then(
				success => {
					this.state.success();
					this.$scope.$emit('formsubmit');
				},
				error => {
					this.error = error;
					this.state.error(error);
				}
			)/*.finally(() => {
				this.state.ready();
			})*/;
			/*
			this.$timeout(() => {
				this.state.ready();
			}, 2000);
			*/
		}
	}

	onInvalid() {
		this.$scope.$broadcast('onInvalid');
	}

}

ContactsCtrl.$inject = ['$scope', '$location', '$timeout', '$http', 'StateService'];

export default ContactsCtrl;
