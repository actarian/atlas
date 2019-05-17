/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';

let first = true;

export default class CustomRenderer extends Highway.Renderer {

	// This method in the renderer is run when the data-router-view is added to the DOM Tree.
	onEnter() {
		console.log('onEnter');
		if (!first) {
			const scope = CustomRenderer.scope;
			const $timeout = CustomRenderer.$timeout;
			$timeout(() => {
				scope.root.menuOpened = false;
				scope.root.menuProductOpened = false;
				const $compile = CustomRenderer.$compile;
				const view = [...document.querySelectorAll('.view')].pop();
				console.log(view.innerHTML);
				const element = angular.element(view);
				const $scope = element.scope();
				$compile(element.contents())($scope);
			});
		}
	}

	// This method in the renderer is run when transition to hide the data-router-view is called.
	onLeave() {
		console.log('onLeave');
	}

	// This method in the renderer is run when the transition to display the data-router-view is done.
	onEnterCompleted() {
		console.log('onEnterCompleted');
		if (first) {
			first = false;
		}
	}

	// This method in the renderer is run when the data-router-view is removed from the DOM Tree.
	onLeaveCompleted() {
		console.log('onLeaveCompleted');
		/*
		const $timeout = CustomRenderer.$timeout;
		const scope = CustomRenderer.scope;
		$timeout(() => {
			scope.root.menuOpened = false;
			scope.root.menuProductOpened = false;
		});
		*/
	}
}
