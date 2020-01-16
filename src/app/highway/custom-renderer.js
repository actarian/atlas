

import Highway from '@dogstudio/highway';
import GtmService from '../gtm/gtm.service';

let first = true;

export default class CustomRenderer extends Highway.Renderer {

	update() {
		this.updateMeta();
		this.updateGTMData();
		this.pageView();
		this.updateBrand();
		this.updateSearchQuery();
		this.updateMarketsAndLanguages();
	}

	updateMeta() {
		const page = this.properties.page;
		document.title = page.title;
	}

	updateBrand() {
		const page = this.properties.page;
		const body = page.querySelector('body');
		let brand = /(["'])(\\?.)*?\1/.exec(body.getAttribute('ng-init') || '');
		brand = brand ? brand[0].replace(/\'/g, '') : 'atlas-concorde';
		// console.log(brand);
		CustomRenderer.$timeout(() => {
			const scope = CustomRenderer.scope;
			scope.root.brand = brand;
			// console.log('CustomRenderer.update', scope);
		});
	}

	updateSearchQuery() {
		const page = this.properties.page;
		const dataSearch = [...page.querySelectorAll('[data-search]')];
		if (dataSearch.length) {
			const pageDataSearch = [...document.querySelectorAll('[data-search]')];
			pageDataSearch.forEach(node => {
				node.setAttribute('data-search', dataSearch[0].getAttribute('data-search'));
			});
		}
	}

	updateMarketsAndLanguages() {
		const page = this.properties.page;
		const marketSelector = page.getElementById('market-selector');
		if (marketSelector != null) {
			try {
				const marketUrls = angular.fromJson(marketSelector.getAttribute('data-markets'));
				CustomRenderer.scope.root.marketUrls = marketUrls;
			} catch (e) {}
		}
		/*
		const marketsAndLanguages = [...page.querySelectorAll('.nav--markets__secondary > li > a')];
		const anchors = [...document.querySelectorAll('.nav--markets__secondary > li > a')];
		anchors.forEach(a => {
			const marketAndLanguage = marketsAndLanguages.find(x => x.id === a.id);
			if (marketAndLanguage) {
				a.href = marketAndLanguage.href;
				console.log('updateMarketsAndLanguages', marketAndLanguage.id, marketAndLanguage.href);
			}
		});
		*/
	}

	pageView() {
		const page = this.properties.page;
		if (!page.getElementById(GtmService.FILTERS_SCRIPT_ID)) {
			GtmService.pageView();
		}
	}

	updateGTMData() {
		const page = this.properties.page;
		const script = page.getElementById("gtm-page-data");
		if (script && script.text) {
			try {
				new Function(script.text)();
			} catch (error) {}
		}
	}

	// This method in the renderer is run when the data-router-view is added to the DOM Tree.
	onEnter() {
		// console.log('onEnter');
		if (!first) {
			CustomRenderer.$timeout(() => {
				const $compile = CustomRenderer.$compile;
				const view = [...document.querySelectorAll('.view')].pop();
				// console.log(view.childNodes);
				const element = angular.element(view.childNodes);
				const $scope = CustomRenderer.scope;
				$scope.root.menuOpened = false;
				$scope.root.menuProductOpened = false;
				const $newScope = $scope.$new();
				const content = $compile(element)($newScope);
				CustomRenderer.$newScope = $newScope;
				CustomRenderer.content = content;
				/*
				element.on('$destroy', (event) => {
					console.log('.view -> $destroy', event);
				});
				*/
				// element.append(content);
			});
		}
	}

	// This method in the renderer is run when transition to hide the data-router-view is called.
	onLeave() {
		// console.log('onLeave', first);
		if (first) {
			first = false;
			const view = [...document.querySelectorAll('.view')].shift();
			const element = angular.element(view.childNodes);
			/*
			element.on('$destroy', (event) => {
				console.log('.view -> $destroy', event);
			});
			*/
		}
	}

	// This method in the renderer is run when the transition to display the data-router-view is done.
	onEnterCompleted() {
		// console.log('onEnterCompleted');
		/*
		if (first) {
			first = false;
		}
		*/
	}

	// This method in the renderer is run when the data-router-view is removed from the DOM Tree.
	onLeaveCompleted() {
		// console.log('onLeaveCompleted');
	}

	static $destroy(from) {
		// console.log('CustomRenderer.destroy', this.content, this.$newScope);
		if (CustomRenderer.scope && CustomRenderer.scope.$root && CustomRenderer.scope.$root.first) {
			CustomRenderer.$timeout(() => {
				CustomRenderer.scope.$root.first = null;
			});
		} else {
			if (this.content) {
				this.content.remove();
				this.content = null;
			}
			if (this.$newScope) {
				this.$newScope.$destroy();
				this.$newScope = null;
			}
			from.remove();
		}
	}

	static collectScopes(scope, scopes) {
		scopes = scopes || [];
		if (scope) {
			let child = scope && scope.$$childHead;
			while (child) {
				scopes.push(child);
				scopes = this.collectScopes(child, scopes);
				child = child.$$nextSibling;
			}
			// console.log(scopes);
		}
		return scopes;
	}

}
