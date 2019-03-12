/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class GlslCanvasDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const canvas = new GlslCanvas(element[0]);
		canvas.on('render', function() {});
		console.log(attributes.glslCanvas);
		canvas.setTexture('u_texture', attributes.glslCanvas, { repeat: true });
		canvas.on('move', function(mouse) {
			canvas.setUniforms({
				u_x: mouse.x + 0.001,
				u_y: mouse.y + 0.001,
			});
		});
		scope.$on('destroy', () => {
			canvas.destroy();
		});
		/*
		canvas.on('over', function() {
			if (canvas.uniforms.get('u_texture').texture.url === 'data/mars.jpg') {
				canvas.setUniform('u_texture', 'data/moon.jpg');
			} else {
				// canvas.setUniform('u_texture', 'data/mars.jpg');
				canvas.setTexture('u_texture', 'data/mars.jpg', { repeat: true });
			}
		});
		canvas.setUniform('u_video', '#video-4');
		canvas.setTexture('u_texture', 'data/noise.png', { repeat: true });
		canvas.on('render', function() {
			canvas.setUniform('u_pos', Math.random() - 0.5, Math.random() - 0.5);
		});
		canvas.on('render', function() {
			canvas.setUniform('u_pos', Math.random() - 0.5, Math.random() - 0.5);
			canvas.setUniform('u_col', Math.random(), Math.random(), Math.random());
		});
		canvas.setUniform('u_texture', ['data/moon.jpg', 'data/mars.jpg']);
		canvas.setUniform('u_video', '#video-4');
		canvas.on('move', function(mouse) {
			canvas.setUniforms({
				u_x: mouse.x + 0.001,
				u_y: mouse.y + 0.001,
			});
		});
*/
	}

	static factory() {
		return new GlslCanvasDirective();
	}

}

GlslCanvasDirective.factory.$inject = [];
