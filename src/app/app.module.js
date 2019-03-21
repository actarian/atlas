/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import CollectionsCtrl from './collections/collections.controller';
import AppearDirective from './directives/appear.directive';
import AutocompleteDirective from './directives/autocomplete.directive';
import GlslCanvasDirective from './directives/glsl-canvas.directive';
import HasDropdownDirective from './directives/has-dropdown.directive';
import HrefDirective from './directives/href.directive';
import LazyScriptDirective from './directives/lazy-script.directive';
import LazyDirective from './directives/lazy.directive';
import MediaDirective from './directives/media.directive';
import ParallaxDirective from './directives/parallax.directive';
import ScrollDirective from './directives/scroll.directive';
import StickyDirective from './directives/sticky.directive';
import { SwiperHeroDirective, SwiperSlideItemDirective, SwiperTileDirective } from './directives/swiper.directive';
import VideoDirective from './directives/video.directive';
import WishlistDirective from './directives/wishlist.directive';
import RootCtrl from './root.controller';
import ApiService from './services/api.service';
import DomService from './services/dom.service';

const MODULE_NAME = 'app';

const app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('*');
}]);

app.factory('ApiService', ApiService.factory)
	.factory('DomService', DomService.factory);

app.directive('appear', AppearDirective.factory)
	.directive('href', HrefDirective.factory)
	.directive('glslCanvas', GlslCanvasDirective.factory)
	.directive('hasDropdown', HasDropdownDirective.factory)
	.directive('autocomplete', AutocompleteDirective.factory)
	.directive('lazy', LazyDirective.factory)
	.directive('lazyScript', LazyScriptDirective.factory)
	.directive('media', MediaDirective.factory)
	.directive('parallax', ParallaxDirective.factory)
	.directive('scroll', ScrollDirective.factory)
	.directive('sticky', StickyDirective.factory)
	.directive('swiperHero', SwiperHeroDirective.factory)
	.directive('swiperTile', SwiperTileDirective.factory)
	.directive('swiperSlideItem', SwiperSlideItemDirective.factory)
	.directive('video', VideoDirective.factory)
	.directive('wishlist', WishlistDirective.factory);

app.controller('RootCtrl', RootCtrl)
	.controller('CollectionsCtrl', CollectionsCtrl);

app.filter('trusted', ['$sce', TrustedFilter]);

function TrustedFilter($sce) {
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
}

// app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

export default MODULE_NAME;
