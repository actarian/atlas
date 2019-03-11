/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import ParallaxDirective from './directives/parallax.directive';
import ScrollDirective from './directives/scroll.directive';
import StickyDirective from './directives/sticky.directive';
import RootCtrl from './root.controller';
import ApiService from './services/api.service';
import RafService from './services/raf.service';

const MODULE_NAME = 'app';

const app = angular.module(MODULE_NAME, ['ngSanitize', 'artisan', 'jsonFormatter']);

app.factory('ApiService', ApiService.factory)
	.factory('RafService', RafService.factory);

app.directive('scroll', ScrollDirective.factory)
	.directive('parallax', ParallaxDirective.factory)
	.directive('sticky', StickyDirective.factory);

app.controller('RootCtrl', RootCtrl);

app.run(['$compile', '$timeout', '$rootScope', '$modal', 'Router', 'Trust', function($compile, $timeout, $rootScope, $modal, Router, Trust) {

	$rootScope.modals = $modal.modals;
	$rootScope.addModal = $modal.addModal;

	$rootScope.router = Router;
	$rootScope.trust = Trust;

	/*
	FacebookService.require();
	GoogleService.require();
	*/

}]);

export default MODULE_NAME;
