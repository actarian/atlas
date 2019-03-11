/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import AppearDirective from './directives/appear.directive';
import ParallaxDirective from './directives/parallax.directive';
import ScrollDirective from './directives/scroll.directive';
import StickyDirective from './directives/sticky.directive';
import RootCtrl from './root.controller';
import ApiService from './services/api.service';
import RafService from './services/raf.service';

const MODULE_NAME = 'app';

const app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);

app.factory('ApiService', ApiService.factory)
	.factory('RafService', RafService.factory);

app.directive('appear', AppearDirective.factory)
	.directive('parallax', ParallaxDirective.factory)
	.directive('scroll', ScrollDirective.factory)
	.directive('sticky', StickyDirective.factory);

app.controller('RootCtrl', RootCtrl);

// app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

export default MODULE_NAME;
