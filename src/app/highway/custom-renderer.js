/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';

export default class CustomRenderer extends Highway.Renderer {
	onEnter(event) {
		console.log('onEnter', event);
	}
	onLeave() {

	}
	onEnterCompleted() {

	}
	onLeaveCompleted() {

	}
}
