/* jshint esversion: 6 */
/* global angular */

const TIMEOUT = 5 * 60 * 1000; // five minutes

export class CookieService {

	constructor(
		PromiseService
	) {
		this.promise = PromiseService;
	}

	delete(name) {
		setter(name, '', -1);
	}

	exist(name) {
		return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
	}

	get(name) {
		const cookieName = name + "=";
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(cookieName) === 0) {
				const value = c.substring(cookieName.length, c.length);
				let model = null;
				try {
					model = JSON.parse(decodeURIComponent(atob(value)));
				} catch (e) {
					console.log('CookieService.get.error parsing', key, e);
				}
				return model;
			}
		}
		return null;
	}

	on(name) {
		return this.promise.make((promise) => {
			let i, interval = 1000,
				elapsed = 0,
				timeout = TIMEOUT;

			const checkCookie = () => {
				if (elapsed > timeout) {
					promise.reject('timeout');
				} else {
					const c = this.get(name);
					if (c) {
						promise.resolve(c);
					} else {
						elapsed += interval;
						i = setTimeout(checkCookie, interval);
					}
				}
			};
			checkCookie();
		});
	}

	set(name, value, days) {
		try {
			const cache = [];
			const json = JSON.stringify(value, function(key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// Circular reference found, discard key
						return;
					}
					cache.push(value);
				}
				return value;
			});
			this.setter(name, btoa(encodeURIComponent(json)), days);
		} catch (e) {
			console.log('CookieService.error serializing', name, value, e);
		}
	}

	setter(name, value, days) {
		let expires;
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toGMTString();
		} else {
			expires = '';
		}
		document.cookie = name + '=' + value + expires + '; path=/';
	}

	static factory(PromiseService) {
		return new CookieService(PromiseService);
	}

}
CookieService.factory.$inject = ['PromiseService'];

export class LocalStorageService {

	constructor(
		PromiseService
	) {
		this.promise = PromiseService;
	}

	delete(name) {
		window.localStorage.removeItem(name);
	}

	exist(name) {
		return window.localStorage[name] !== undefined;
	}

	get(name) {
		let value = null;
		if (window.localStorage[name] !== undefined) {
			try {
				value = JSON.parse(window.localStorage[name]);
			} catch (e) {
				console.log('LocalStorageService.get.error parsing', name, e);
			}
		}
		return value;
	}

	set(name, value) {
		try {
			const cache = [];
			const json = JSON.stringify(value, function(key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// Circular reference found, discard key
						return;
					}
					cache.push(value);
				}
				return value;
			});
			window.localStorage.setItem(name, json);
		} catch (e) {
			console.log('LocalStorageService.set.error serializing', name, value, e);
		}
	}

	on(name) {
		return this.promise.make((promise) => {
			let i, interval = 1000,
				elapsed = 0,
				timeout = TIMEOUT;

			const storageEvent = (e) => {
				if (i) {
					clearTimeout(i);
				}
				if (e.originalEvent.key == name) {
					try {
						const value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue
						promise.resolve(value);
					} catch (error) {
						console.log('LocalStorageService.on.error parsing', name, error);
						promise.reject('error parsing ' + name);
					}
				}
			};
			angular.element(window).on('storage', storageEvent);
			i = setTimeout(function() {
				promise.reject('timeout');
			}, timeout);
		});
	}

	static isLocalStorageSupported() {
		let supported = false;
		try {
			supported = 'localStorage' in window && window.localStorage !== null;
			if (supported) {
				window.localStorage.setItem('test', '1');
				window.localStorage.removeItem('test');
			} else {
				supported = false;
			}
		} catch (e) {
			supported = false;
		}
		return supported;
	}

	static factory(PromiseService) {
		if (LocalStorageService.isLocalStorageSupported()) {
			return new LocalStorageService(PromiseService);
		} else {
			return new CookieService(PromiseService);
		}
	}

}
LocalStorageService.factory.$inject = ['PromiseService'];

export class SessionStorageService {

	constructor(
		PromiseService
	) {
		this.promise = PromiseService;
	}

	delete(name) {
		window.sessionStorage.removeItem(name);
	}

	exist(name) {
		return window.sessionStorage[name] !== undefined;
	}

	get(name) {
		let value = null;
		if (window.sessionStorage[name] !== undefined) {
			try {
				value = JSON.parse(window.sessionStorage[name]);
			} catch (e) {
				console.log('SessionStorageService.get.error parsing', name, e);
			}
		}
		return value;
	}

	set(name, value) {
		try {
			const cache = [];
			const json = JSON.stringify(value, function(key, value) {
				if (key === 'pool') {
					return;
				}
				if (typeof value === 'object' && value !== null) {
					if (cache.indexOf(value) !== -1) {
						// Circular reference found, discard key
						return;
					}
					cache.push(value);
				}
				return value;
			});
			window.sessionStorage.setItem(name, json);
		} catch (e) {
			console.log('SessionStorageService.set.error serializing', name, value, e);
		}
	}

	on(name) {
		return this.promise.make((promise) => {
			let i, interval = 1000,
				elapsed = 0,
				timeout = TIMEOUT;

			const storageEvent = (e) => {
				if (i) {
					clearTimeout(i);
				}
				if (e.originalEvent.key == name) {
					try {
						const value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue
						promise.resolve(value);
					} catch (error) {
						console.log('SessionStorageService.on.error parsing', name, error);
						promise.reject('error parsing ' + name);
					}
				}
			};
			angular.element(window).on('storage', storageEvent);
			i = setTimeout(function() {
				promise.reject('timeout');
			}, timeout);
		});
	}

	static isSessionStorageSupported() {
		let supported = false;
		try {
			supported = 'sessionStorage' in window && window.sessionStorage !== null;
			if (supported) {
				window.sessionStorage.setItem('test', '1');
				window.localsessionStorageStorage.removeItem('test');
			} else {
				supported = false;
			}
		} catch (e) {
			supported = false;
		}
		return supported;
	}

	static factory(PromiseService) {
		if (SessionStorageService.isSessionStorageSupported()) {
			return new SessionStorageService(PromiseService);
		} else {
			return new CookieService(PromiseService);
		}
	}

}
SessionStorageService.factory.$inject = ['PromiseService'];
