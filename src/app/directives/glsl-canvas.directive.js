/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { auditTime } from "rxjs/operators";

export default class GlslCanvasDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const canvas = new GlslCanvas(node);
		canvas.setTexture('u_texture', attributes.glslCanvas, { repeat: true });
		canvas.setUniform('u_pow', 1.0);
		canvas.setUniform('u_top', 0.0);
		let pow = { pow: 1.0, top: 0.0 };
		let top = { top: 0.0 };
		let tween;
		const onOver = (event) => {
			// console.log('onOver');
			if (tween) {
				tween.kill();
			}
			tween = TweenLite.to(pow, 3, {
				pow: 0.0,
				ease: Elastic.easeOut.config(1, 0.3),
				overwrite: 'all',
				onUpdate: () => {
					// console.log(pow.pow);
					canvas.setUniform('u_pow', pow.pow);
				},
			});
		};
		const onOut = (event) => {
			// console.log('onOut');
			if (tween) {
				tween.kill();
			}
			tween = TweenLite.to(pow, 3, {
				pow: 1.0,
				ease: Elastic.easeOut.config(1, 0.3),
				overwrite: 'all',
				onUpdate: () => {
					// console.log(pow.pow);
					canvas.setUniform('u_pow', pow.pow);
				},
			});
		};
		node.addEventListener('mouseover', onOver);
		node.addEventListener('mouseout', onOut);
		let scrollTween;
		const subscription = this.domService.scroll$().pipe(
			auditTime(1000 / 25)
		).subscribe(scroll => {
			canvas.setUniform('u_top', window.scrollY || window.scrollTop || 0);
			/*
			scrollTween = TweenLite.to(top, 0.3, {
				top: scroll.scrollTop,
				overwrite: 'all',
				onUpdate: () => {
					// console.log(pow.pow);
					canvas.setUniform('u_top', top.top);
				},
			});
			*/
		});
		canvas.on('error', function(error) {
			console.log(error);
		});
		element.on('$destroy', () => {
			if (tween) {
				tween.kill();
			}
			if (scrollTween) {
				scrollTween.kill();
			}
			node.removeEventListener('mouseover', onOver);
			node.removeEventListener('mouseout', onOut);
			subscription.unsubscribe();
			canvas.destroy();
		});
	}

	static factory(DomService) {
		return new GlslCanvasDirective(DomService);
	}

}

GlslCanvasDirective.factory.$inject = ['DomService'];
