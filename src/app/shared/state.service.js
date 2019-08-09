/* jshint esversion: 6 */


export class State {

	constructor(
		$timeout,
		$rootScope
	) {
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
		this.idle();
	}

	idle() {
		this.isBusy = false;
		this.isError = false;
		this.isErroring = false;
		this.isSuccess = false;
		this.isSuccessing = false;
		this.button = null;
		this.errors = [];
	}

	busy() {
		if (!this.isBusy) {
			this.isBusy = true;
			this.isError = false;
			this.isErroring = false;
			this.isSuccess = false;
			this.isSuccessing = false;
			this.errors = [];
			return true;
		} else {
			return false;
		}
	}

	classes(addons) {
		const classes = {
			ready: this.isReady,
			busy: this.isBusy,
			successing: this.isSuccessing,
			success: this.isSuccess,
			errorring: this.isErroring,
			error: this.isError,
		};
		if (addons) {
			Object.keys(addons).forEach((key) => {
				classes[addons[key]] = classes[key];
			});
		}
		return classes;
	}

	enabled() {
		return !this.isBusy && !this.isErroring && !this.isSuccessing;
	}

	error(error) {
		console.log('State.error', error);
		this.isBusy = false;
		this.isError = true;
		this.isErroring = true;
		this.isSuccess = false;
		this.isSuccessing = false;
		this.errors.push(error);
		$timeout(() => {
			this.isErroring = false;
		}, DELAY);
	}

	errorMessage() {
		return this.isError ? this.errors[this.errors.length - 1] : null;
	}

	labels(addons) {
		const defaults = {
			ready: 'submit',
			busy: 'sending',
			error: 'error',
			success: 'success',
		};
		if (addons) {
			angular.extend(defaults, addons);
		}
		let label = defaults.ready;
		if (this.isBusy) {
			label = defaults.busy;
		} else if (this.isSuccess) {
			label = defaults.success;
		} else if (this.isError) {
			label = defaults.error;
		}
		return label;
	}

	ready() {
		this.idle();
		this.isReady = true;
		this.$rootScope.$broadcast('$thisReady', this);
	}

	submitClass() {
		return {
			busy: this.isBusy,
			ready: this.isReady,
			successing: this.isSuccessing,
			success: this.isSuccess,
			errorring: this.isErroring,
			error: this.isError,
		};
	}

	success() {
		this.isBusy = false;
		this.isError = false;
		this.isErroring = false;
		this.isSuccess = true;
		this.isSuccessing = true;
		this.errors = [];
		this.$timeout(() => {
			this.isSuccessing = false;
		}, DELAY);
	}

}

export default class StateService {

	constructor(
		$timeout,
		$rootScope
	) {
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
	}

	getState() {
		return new State(this.$timeout, this.$rootScope);
	}

	static factory($timeout, $rootScope) {
		return new StateService($timeout, $rootScope);
	}

}

StateService.factory.$inject = ['$timeout', '$rootScope'];
