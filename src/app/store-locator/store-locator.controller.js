/* jshint esversion: 6 */


import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

const ZOOM_LEVEL = 13;
const SHOW_INFO_WINDOW = false;
let GOOGLE_MAPS = null;

class StoreLocatorCtrl {

	constructor(
		$scope,
		$timeout,
		DomService,
		ApiService
	) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.domService = DomService;
		this.apiService = ApiService;
		this.model = {};
		this.apiKey = window.apiKey || 'AIzaSyC9ZjpjjpaaDRZYkK5sjeyJahSUzKckgOM';
		this.busyFind = false;
		this.busyLocation = false;
		this.visibleStores = [];
		this.mapCenter$ = new Subject();
		//
		// When the window has finished loading create our google map below
		if (GOOGLE_MAPS !== null) {
			this.initMap();
		} else {
			window.onGoogleMapsLoaded = () => {
				GOOGLE_MAPS = google.maps;
				this.initMap();
			};
			const script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=onGoogleMapsLoaded`);
			(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
			/*
			google.maps.event.addDomListener(window, 'load', () => {
				GOOGLE_MAPS = google.maps;
				this.initMap();
			});
			*/
		}
		//
		this.unsubscribe = new Subject();
		this.mapCenter$.pipe(
			debounceTime(1000),
			takeUntil(this.unsubscribe)
		).subscribe(position => {
			this.findNearStores(this.stores, position);
		});
		$scope.$on('destroy', () => {
			// console.log('destroy');
			this.unsubscribe.next();
			this.unsubscribe.complete();
		});
	}

	initMap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 7,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(41.4632232, 14.3898072), // New York
			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }] }]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');
		if (!mapElement) {
			return;
		}
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
		map.addListener('dragend', () => {
			const position = map.getCenter();
			this.mapCenter$.next(position);
		});
		this.$timeout(() => {
			this.map = map;
		});
		// console.log('timeout');
	}

	calculateDistance(lat1, lon1, lat2, lon2, unit) {
		if ((lat1 == lat2) && (lon1 == lon2)) {
			return 0;
		} else {
			const radlat1 = Math.PI * lat1 / 180;
			const radlat2 = Math.PI * lat2 / 180;
			const theta = lon1 - lon2;
			const radtheta = Math.PI * theta / 180;
			let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180 / Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit == "K") {
				dist = dist * 1.609344;
			}
			if (unit == "N") {
				dist = dist * 0.8684;
			}
			return dist;
		}
	}

	addMarkers(stores) {
		const markers = stores.map((store) => {
			const position = new google.maps.LatLng(store.latitude, store.longitude);
			const content = `<div class="marker__content">
				<div class="title"><span>${store.name}</span></div>
				<div class="group group--info">
					<div class="address">
						${store.address}<br>
						${store.zip} ${store.city} ${store.cod_provincia} ${store.stato_IT}<br>
						<span ng-if="store.tel">${store.tel}<br></span>
						<span ng-if="store.email"><a ng-href="mailto:${store.email}">${store.email}</a></span>
					</div>
					<div class="distance">At approx. <b>${Math.floor(store.distance)} km</b></div>
				</div>
				<div class="group group--cta">
					<a href="${store.webSite}" target="_blank" class="btn btn--link" ng-if="store.webSite"><span>More info</span></a>
					<a href="https://www.google.it/maps/dir/${this.position.lat()},${this.position.lng()}/${store.name}/@${store.latitude},${store.longitude}/" target="_blank" class="btn btn--link"><span>How to reach the store</span></a>
				</div>
			</div>`;
			const marker = new google.maps.Marker({
				position: position,
				// map: this.map,
				icon: store.importante ? './img/store-locator/store-primary.png' : './img/store-locator/store-secondary.png',
				title: store.name,
				store: store,
				content: content,
			});
			marker.addListener('click', () => {
				this.setMarkerWindow(marker.position, content);
				this.scrollToStore(store);
			});
			/*
			marker.addListener('mouseout', () => {
				this.setMarkerWindow(null);
			});
			*/
			return marker;
			/*
			function panTo(e) {
				if (current !== marker) {
					current = marker;
					var ll = new google.maps.LatLng(latlng[0], latlng[1]);
					map.panTo(ll);
					onMarkerDidSelect();
				}
			}
			node.addEventListener('click', panTo);
			node.addEventListener('mouseover', panTo);
			*/
		});
		const markerCluster = new MarkerClusterer(this.map, markers, {
			imagePath: 'img/store-locator/cluster-',
		});
		const styles = markerCluster.getStyles();
		styles.forEach(style => style.textColor = '#ffffff');
		markerCluster.setStyles(styles);
		// console.log('StoreLocatorCtrl.searchPosition', position, stores);
		this.markers = markers;
		this.markerCluster = markerCluster;
	}

	getGeolocation(map) {
		this.error = null;
		this.busyLocation = true;
		let position = this.map.getCenter();
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((location) => {
				// console.log(location.coords);
				position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
				this.setInfoWindow(position, 1);
				this.searchPosition(position).finally(() => this.busyLocation = false);
				this.map.setCenter(position);
				this.map.setZoom(ZOOM_LEVEL);
			}, () => {
				this.setInfoWindow(position, 2);
				this.searchPosition(position).finally(() => this.busyLocation = false);
			});
		} else {
			// Browser doesn't support Geolocation
			this.setInfoWindow(position, 3);
			this.searchPosition(position).finally(() => this.busyLocation = false);
		}
	}

	loadStoresByPosition(position) {
		return this.apiService.storeLocator.position(position).then(success => {
			const stores = success.data;
			this.stores = stores;
			// console.log('StoreLocatorCtrl.loadStoresByPosition', position, stores);
			this.addMarkers(stores);
		});
	}

	loadAllStores() {
		if (this.stores) {
			return Promise.resolve(this.stores);
		}
		return this.apiService.storeLocator.all().then(success => {
			const stores = success.data;
			stores.forEach(store => store.distance = this.calculateDistance(store.latitude, store.longitude, this.position.lat(), this.position.lng(), 'K'));
			this.addMarkers(stores);
			this.stores = stores;
			return stores;
		});
	}

	fitBounds(stores) {
		if (stores.length) {
			const bounds = new google.maps.LatLngBounds();
			stores.forEach((store) => {
				const position = new google.maps.LatLng(store.latitude, store.longitude);
				bounds.extend(position);
			});
			this.map.fitBounds(bounds);
			// console.log('fitBounds');
		}
	}

	findNearStores(stores, position) {
		if (stores) {
			stores = stores.slice();
			stores.sort((a, b) => {
				const da = this.calculateDistance(a.latitude, a.longitude, position.lat(), position.lng(), 'K');
				const db = this.calculateDistance(b.latitude, b.longitude, position.lat(), position.lng(), 'K');
				return da * (a.importante ? 0.5 : 1) - db * (b.importante ? 0.5 : 1);
			});
			const visibleStores = stores.slice(0, 50);
			this.$timeout(() => {
				this.visibleStores = visibleStores;
			}, 1);
			// console.log('findNearStores', visibleStores);
			return visibleStores;
		}
	}

	searchPosition(position) {
		this.position = position;
		this.map.setCenter(position);
		this.map.setZoom(ZOOM_LEVEL);
		this.setInfoWindow(position, 1);
		return this.loadAllStores().then(stores => {
			const visibleStores = this.findNearStores(stores, position);
			/*
			if (visibleStores) {
				this.fitBounds(visibleStores);
			}
			*/
		});
	}

	panTo(store) {
		const position = new google.maps.LatLng(store.latitude, store.longitude);
		this.map.setZoom(ZOOM_LEVEL);
		this.map.panTo(position);
		const marker = this.markers.find(x => x.store === store);
		this.setMarkerWindow(marker.position, marker.content);
	}

	onSubmit() {
		this.error = null;
		this.busyFind = true;
		const geocoder = this.geocoder || new google.maps.Geocoder();
		this.geocoder = geocoder;
		geocoder.geocode({ address: this.model.address }, (results, status) => {
			this.model = {};
			if (status == 'OK') {
				const position = results[0].geometry.location;
				// console.log('location', location);
				// const position = new google.maps.LatLng(location);
				this.searchPosition(position).finally(() => this.busyFind = false);
			} else {
				this.$timeout(() => {
					const message = 'Geocode was not successful for the following reason: ' + status;
					// console.log('StoreLocatorCtrl.onSubmit.error', message);
					this.error = { message };
					this.busyFind = false;
				});
			}
		});
	}

	setInfoWindow(position, mode) {
		if (SHOW_INFO_WINDOW) {
			const infoWindow = this.infoWindow || new google.maps.InfoWindow();
			this.infoWindow = infoWindow;
			infoWindow.setPosition(position);
			switch (mode) {
				case 1:
					infoWindow.setContent('Current location');
					break;
				case 2:
					infoWindow.setContent('Error: The Geolocation service failed.');
					break;
				default:
					infoWindow.setContent('Error: Your browser doesn\'t support geolocation.');
			}
			infoWindow.open(this.map);
		}
	}

	setMarkerWindow(position, content) {
		if (position) {
			const markerWindow = this.markerWindow || new google.maps.InfoWindow({
				pixelOffset: new google.maps.Size(0, -35)
			});
			this.markerWindow = markerWindow;
			markerWindow.setPosition(position);
			markerWindow.setContent(content);
			markerWindow.open(this.map);
		} else {
			if (this.markerWindow) {
				this.markerWindow.close();
			}
		}
	}

	scrollToStore(store) {
		const storesNode = document.querySelector('.section--stores');
		const storeNode = document.querySelector(`#store-${store.id_SF}`);
		// console.log(storesNode, storeNode);
		storesNode.scrollTo(0, storeNode.offsetTop);
	}

}

StoreLocatorCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default StoreLocatorCtrl;
