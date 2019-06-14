/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import Highway from '@dogstudio/highway';
import GtmService from '../gtm/gtm.service';

let first = true;

export default class CustomRenderer extends Highway.Renderer {

	update() {
		// Now we update all the informations in the DOM we need!
		// We update the title
		document.title = this.properties.page.title;
		// console.log('CustomRenderer.update', this.properties);
		// CustomRenderer.H.pushState_();
		// console.log(document.innerHTML, this.properties.page.innerHTML);
		GtmService.pageView();
	}

	// This method in the renderer is run when the data-router-view is added to the DOM Tree.
	onEnter() {
		// console.log('onEnter');
		if (!first) {
			const $timeout = CustomRenderer.$timeout;
			$timeout(() => {
				const $compile = CustomRenderer.$compile;
				const view = [...document.querySelectorAll('.view')].pop();
				// console.log(view.childNodes);
				const element = angular.element(view.childNodes);
				const $scope = element.scope();
				$scope.root.menuOpened = false;
				$scope.root.menuProductOpened = false;
				const $newScope = $scope.$new();
				const content = $compile(element)($newScope);
				CustomRenderer.$newScope = $newScope;
				CustomRenderer.content = content;
				element.on('$destroy', (event) => {
					console.log('.view -> $destroy', event);
				});
				// element.append(content);
			});
		}
	}

	// This method in the renderer is run when transition to hide the data-router-view is called.
	onLeave() {
		// console.log('onLeave');
	}

	// This method in the renderer is run when the transition to display the data-router-view is done.
	onEnterCompleted() {
		// console.log('onEnterCompleted');
		if (first) {
			first = false;
		}
	}

	// This method in the renderer is run when the data-router-view is removed from the DOM Tree.
	onLeaveCompleted() {
		// console.log('onLeaveCompleted');
		/*
		if (CustomRenderer.$newScope) {
			CustomRenderer.$newScope.$destroy();
		}
		*/
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
