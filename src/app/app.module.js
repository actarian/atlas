﻿/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import CollectionsCtrl from './collections/collections.controller';
import ContactsCtrl from './contacts/contacts.controller';
import AppearDirective from './directives/appear.directive';
import AutocompleteDirective from './directives/autocomplete.directive';
import GlslCanvasDirective from './directives/glsl-canvas.directive';
import HasDropdownDirective from './directives/has-dropdown.directive';
import HilightDirective from './directives/hilight.directive';
import HrefDirective from './directives/href.directive';
import LazyScriptDirective from './directives/lazy-script.directive';
import LazyDirective from './directives/lazy.directive';
import MediaDirective from './directives/media.directive';
import ParallaxDirective from './directives/parallax.directive';
import ScrollDirective from './directives/scroll.directive';
import StickyDirective from './directives/sticky.directive';
import { SwiperGalleryDirective, SwiperHeroDirective, SwiperSlideItemDirective, SwiperTileDirective } from './directives/swiper.directive';
import VideoDirective from './directives/video.directive';
import WishlistDirective from './directives/wishlist.directive';
import FaqCtrl from './faq/faq.controller';
import { ImageWithFeatures } from './filters/image-with-features.filter';
import { NotInFilter } from './filters/notIn.filter';
import { TrustedFilter } from './filters/trusted.filter';
import ControlMessagesDirective from './forms/control-messages.directive';
import ControlDirective from './forms/control.directive';
import ValidateDirective from './forms/validate.directive';
import ReferencesCtrl from './references/references.controller';
import RootCtrl from './root.controller';
import ApiService from './services/api.service';
import DomService from './services/dom.service';
import StateService from './shared/state';
import StoreLocatorCtrl from './store-locator/store-locator.controller';

const MODULE_NAME = 'app';

const app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('*');
}]);

app.factory('ApiService', ApiService.factory)
	.factory('DomService', DomService.factory)
	.factory('StateService', StateService.factory);

app.directive('appear', AppearDirective.factory)
	.directive('control', ControlDirective.factory)
	.directive('controlMessages', ControlMessagesDirective.factory)
	.directive('glslCanvas', GlslCanvasDirective.factory)
	.directive('hasDropdown', HasDropdownDirective.factory)
	.directive('hilight', HilightDirective.factory)
	.directive('href', HrefDirective.factory)
	.directive('selectWithAutocomplete', AutocompleteDirective.factory)
	.directive('lazy', LazyDirective.factory)
	.directive('lazyScript', LazyScriptDirective.factory)
	.directive('media', MediaDirective.factory)
	.directive('parallax', ParallaxDirective.factory)
	.directive('scroll', ScrollDirective.factory)
	.directive('sticky', StickyDirective.factory)
	.directive('swiperGallery', SwiperGalleryDirective.factory)
	.directive('swiperHero', SwiperHeroDirective.factory)
	.directive('swiperTile', SwiperTileDirective.factory)
	.directive('swiperSlideItem', SwiperSlideItemDirective.factory)
	.directive('validate', ValidateDirective.factory)
	.directive('video', VideoDirective.factory)
	.directive('wishlist', WishlistDirective.factory);

app.controller('RootCtrl', RootCtrl)
	.controller('CollectionsCtrl', CollectionsCtrl)
	.controller('ContactsCtrl', ContactsCtrl)
	.controller('FaqCtrl', FaqCtrl)
	.controller('ReferencesCtrl', ReferencesCtrl)
	.controller('StoreLocatorCtrl', StoreLocatorCtrl);

app.filter('imageWithFeatures', [ImageWithFeatures])
	.filter('notIn', ['$filter', NotInFilter])
	.filter('trusted', ['$sce', TrustedFilter]);

// app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

export default MODULE_NAME;
