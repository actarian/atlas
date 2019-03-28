/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

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
		this.apiKey = window.apiKey || 'AIzaSyCT6lZ3i-iD7L4Y7jK244Fr1nJozTXR55M';

		//
		// When the window has finished loading create our google map below
		if (GOOGLE_MAPS !== null) {
			this.initMap();
		}
		google.maps.event.addDomListener(window, 'load', () => {
			GOOGLE_MAPS = google.maps;
			this.initMap();
		});
		//

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
		this.map = map;
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
		const bounds = new google.maps.LatLngBounds();
		stores.forEach((store) => {
			store.distance = this.calculateDistance(store.latitude, store.longitude, this.position.lat(), this.position.lng(), 'K');
			const position = new google.maps.LatLng(store.latitude, store.longitude);
			bounds.extend(position);
			var marker = new google.maps.Marker({
				position: position,
				map: this.map,
				icon: './img/icons/favicon-32x32.png',
				title: store.name,
			});

			/*
			marker.addListener('click', () => {
				console.log(marker);
				// infowindow.setContent('<strong>' + node.querySelector('.title').innerHTML + '</strong>');
				// infowindow.open(map, marker);
			});
			*/

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
		if (stores.length) {
			this.map.fitBounds(bounds);
		}
	}

	getGeolocation(map) {
		let position = this.map.getCenter();
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((location) => {
				// console.log(location.coords);
				position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
				this.setInfoWindow(position, 1);
				this.searchPosition(position);
				this.map.setCenter(position);
			}, () => {
				this.setInfoWindow(position, 2);
				this.searchPosition(position);
			});
		} else {
			// Browser doesn't support Geolocation
			this.setInfoWindow(position, 3);
			this.searchPosition(position);
		}
	}

	searchPosition(position) {
		this.position = position;
		this.map.setCenter(position);
		this.setInfoWindow(position, 1);
		this.apiService.storeLocator.position(position).then(success => {
			const stores = success.data;
			this.stores = stores;
			// console.log('StoreLocatorCtrl.searchPosition', position, stores);
			this.addMarkers(stores);
		});
	}

	panTo(store) {
		const position = new google.maps.LatLng(store.latitude, store.longitude);
		this.map.setZoom(10);
		this.map.panTo(position);
	}

	onSubmit() {
		const geocoder = this.geocoder || new google.maps.Geocoder();
		this.geocoder = geocoder;
		geocoder.geocode({ address: this.model.address }, (results, status) => {
			this.model = {};
			if (status == 'OK') {
				const position = results[0].geometry.location;
				// console.log('location', location);
				// const position = new google.maps.LatLng(location);
				this.searchPosition(position);
			} else {
				console.log('StoreLocatorCtrl.onSubmit.error Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	setInfoWindow(position, mode) {
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

StoreLocatorCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

export default StoreLocatorCtrl;
