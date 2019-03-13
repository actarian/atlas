/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import AppearDirective from './directives/appear.directive';
import GlslCanvasDirective from './directives/glsl-canvas.directive';
import LazyDirective from './directives/lazy.directive';
import ParallaxDirective from './directives/parallax.directive';
import ScrollDirective from './directives/scroll.directive';
import StickyDirective from './directives/sticky.directive';
import { SwiperHeroDirective, SwiperSlideItemDirective, SwiperTileDirective } from './directives/swiper.directive';
import RootCtrl from './root.controller';
import ApiService from './services/api.service';
import DomService from './services/dom.service';

const MODULE_NAME = 'app';

const app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);

app.factory('ApiService', ApiService.factory)
	.factory('DomService', DomService.factory);

app.directive('appear', AppearDirective.factory)
	.directive('lazy', LazyDirective.factory)
	.directive('parallax', ParallaxDirective.factory)
	.directive('scroll', ScrollDirective.factory)
	.directive('sticky', StickyDirective.factory)
	.directive('swiperHero', SwiperHeroDirective.factory)
	.directive('swiperTile', SwiperTileDirective.factory)
	.directive('swiperSlideItem', SwiperSlideItemDirective.factory)
	.directive('glslCanvas', GlslCanvasDirective.factory);

app.controller('RootCtrl', RootCtrl);

// app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

export default MODULE_NAME;
