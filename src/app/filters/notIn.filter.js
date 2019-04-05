/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export function NotInFilter($filter) {
	return (array, filters, element) => {
		if (filters) {
			return $filter('filter')(array, (item) => {
				for (var i = 0; i < filters.length; i++) {
					if (filters[i][element] === item[element]) return false;
				}
				return true;
			});
		}
	};
}
