/* jshint esversion: 6 */

import { default as AppModule } from './app.module.js';

console.log('bootstrap', document);

angular.bootstrap(document, [AppModule]);
