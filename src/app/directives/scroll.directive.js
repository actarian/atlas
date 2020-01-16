
import { distinctUntilChanged } from "rxjs/operators";

export default class ScrollDirective {

	// @Output() public scroll = new EventEmitter();

	constructor(
		$timeout,
		DomService
	) {
		this.$timeout = $timeout;
		this.domService = DomService;
		// this.require = 'ngModel';
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		if (attributes.scroll !== undefined) {
			const node = element[0];
			this.$timeout(() => {
				let previous;
				const subscription = this.domService.scrollIntersection$(node).pipe(
					distinctUntilChanged((a, b) => {
						const differs = b.scroll.scrollTop !== previous;
						previous = b.scroll.scrollTop;
						return !differs;
					})
				).subscribe(event => {
					const callback = scope.$eval(attributes.scroll, { $event: event });
					if (typeof callback === 'function') {
						callback(event);
						// scope.$eval(attributes.scroll, { $event: event });
					}
				});
				element.on('$destroy', () => {
					subscription.unsubscribe();
				});
			});
		}
		/*
		const callback = scope.$eval(attributes.scroll);
		if (typeof callback === 'function') {
			const subscription = this.domService.scroll$().subscribe(event => callback(event));
			element.on('$destroy', () => {
				subscription.unsubscribe();
			});
		}
		*/
	}

	static factory($timeout, DomService) {
		return new ScrollDirective($timeout, DomService);
	}

}

ScrollDirective.factory.$inject = ['$timeout', 'DomService'];
