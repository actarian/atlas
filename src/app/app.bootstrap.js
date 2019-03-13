/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { default as AppModule } from './app.module.js';

console.log('bootstrap', document);

angular.bootstrap(document, [AppModule]);
