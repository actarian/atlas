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

	deserialize_(key, serialized) {
		let value = null;
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

	serialize_(keyOrValue, value, q) {
		q = q || {};
		let serialized = null;
		if (typeof keyOrValue === 'string') {
			q[keyOrValue] = value;
		} else {
			q = keyOrValue;
		}
		const json = JSON.stringify(q);
		serialized = window.btoa(json);
		return serialized;
	}

	deserialize(key) {
		const serialized = this.get('q');
		return this.deserialize_(key, serialized);
	}

	serialize(keyOrValue, value) {
		const q = this.deserialize();
		const serialized = this.serialize_(keyOrValue, value, q);
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
