/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export function TrustedFilter($sce) {
	return (url) => {
		return $sce.trustAsResourceUrl(url);
	};
}
