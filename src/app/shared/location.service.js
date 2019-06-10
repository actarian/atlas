/* jshint esversion: 6 */
/* global angular */

export default class LocationService {

	constructor(
		$location
	) {
		this.$location = $location;
	}

	get(key) {
		return this.$location.search()[key];
	}

	set(keyOrValue, value) {
		if (typeof keyOrValue === 'string') {
			this.$location.search(keyOrValue, value).replace();
		} else {
			this.$location.search(keyOrValue).replace();
		}
	}

	deserialize(key) {
		let value = null;
		const serialized = this.get('q');
		// console.log(serialized);
		if (serialized) {
			const json = window.atob(serialized);
			value = JSON.parse(json);
		}
		// console.log(value);
		if (key && value) {
			value = value[key];
		}
		return value || null;
	}

	serialize(keyOrValue, value) {
		let serialized = null;
		let q = this.deserialize() || {};
		if (typeof keyOrValue === 'string') {
			q[keyOrValue] = value;
		} else {
			q = keyOrValue;
		}
		const json = JSON.stringify(q);
		serialized = window.btoa(json);
		this.set('q', serialized);
	}

	getSerialization(keyOrValue, value) {
		let serialized = null;
		let q = {};
		if (typeof keyOrValue === 'string') {
			q[keyOrValue] = value;
		} else {
			q = keyOrValue;
		}
		const json = JSON.stringify(q);
		serialized = window.btoa(json);
		return serialized;
	}

	static factory($location) {
		return new LocationService($location);
	}

}

LocationService.factory.$inject = ['$location'];
