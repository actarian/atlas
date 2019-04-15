/* jshint esversion: 6 */
/* global angular */

export default class PromiseService {

	constructor(
		$q
	) {
		this.$q = $q;
	}

	make(callback) {
		if (typeof callback !== 'function') {
			throw ('promise resolve callback missing');
		}
		const deferred = this.$q.defer();
		callback(deferred);
		return deferred.promise;
	}

	all(promises) {
		return this.$q.all(promises);
	}

	static factory($q) {
		return new PromiseService($q);
	}

}

PromiseService.factory.$inject = ['$q'];
