/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

import { FRAGMENT_SHADER } from "../shared/shader";

export default class GlslCanvasDirective {

	/*
	removed "node_modules/glsl-canvas-js/dist/glsl-canvas.js",
	from gulpfile.config.json
	*/

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		console.log('GlslCanvasDirective.link');
		const node = element[0];
		const canvas = new GlslCanvas(node, { fragmentString: FRAGMENT_SHADER });
		// const canvas = new GlslCanvas(node);
		canvas.setTexture('u_texture', attributes.glslCanvas, { repeat: true });
		canvas.setUniform('u_pow', 1.0);
		canvas.setUniform('u_top', 0.0);
		canvas.setUniform('u_strength', attributes.withVideo !== undefined ? 0.1 : 0.05);
		let pow = { pow: 1.0 };
		let tween;
		const onOver = (event) => {
			// console.log('onOver');
			if (tween) {
				tween.kill();
			}
			tween = TweenMax.to(pow, 3, {
				pow: 0.0,
				ease: Expo.easeOut,
				// Back.easeOut.config(1.7),
				// Elastic.easeOut.config(1, 0.3),
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
			tween = TweenMax.to(pow, 3, {
				pow: 1.0,
				ease: Expo.easeOut,
				// Back.easeOut.config(1.7),
				// Elastic.easeOut.config(1, 0.3),
				overwrite: 'all',
				onUpdate: () => {
					// console.log(pow.pow);
					canvas.setUniform('u_pow', pow.pow);
				},
			});
		};
		node.addEventListener('mouseover', onOver);
		node.addEventListener('mouseout', onOut);
		const subscription = this.domService.raf$().subscribe(scroll => {
			canvas.setUniform('u_top', window.scrollY || window.scrollTop || 0);
		});
		canvas.on('error', function(error) {
			console.log(error);
		});
		element.on('$destroy', () => {
			if (tween) {
				tween.kill();
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
