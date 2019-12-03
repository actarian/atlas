/* jshint esversion: 6 */

let ID = 0;

export default class ThronDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const THRON = window.THRONContentExperience || window.THRONPlayer;
		if (!THRON) {
			return;
		}
		const node = element[0];
		node.id = `thron-${++ID}`;
		const player = THRON(node.id, {
			media: node.getAttribute('data-thron'),
			loop: node.hasAttribute('loop'),
			muted: true,
			autoplay: false,
			displayLinked: 'close',
			noSkin: true,
			lockBitrate: 'max',
		});
		const onReady = function() {
			// console.log('ThronDirective.onReady', node.id);
			const mediaContainer = player.mediaContainer();
			const video = mediaContainer.querySelector('video');
			video.setAttribute('playsinline', 'true');
			scope.$emit('onThronReady', node.id);
			// video.setAttribute('autoplay', 'true');
		};
		const onCanPlay = function() {
			// console.log('ThronDirective.onCanPlay', node.id);
			scope.$emit('onThronCanPlay', node.id);
		}
		const onPlaying = function() {
			player.off('playing', onPlaying);
			const qualities = player.qualityLevels();
			// console.log('ThronDirective.onPlaying', node.id, qualities);
			if (qualities.length) {
				const highestQuality = qualities[qualities.length - 1].index;
				const lowestQuality = qualities[0].index;
				player.currentQuality(highestQuality);
				// console.log('ThronDirective.onPlaying', node.id, 'currentQuality', player.currentQuality());
			}
		};
		const onComplete = function() {
			console.log('ThronDirective.onComplete', node.id);
			scope.$emit('onThronComplete', node.id);
		};
		const playVideo = function() {
			const status = player.status();
			// console.log('ThronDirective.playVideo', node.id, status);
			if (status && !status.playing) {
				player.play();
			}
		};
		const pauseVideo = function() {
			const status = player.status();
			// console.log('ThronDirective.pauseVideo', node.id, status);
			if (status && status.playing) {
				player.pause();
			}
		};
		player.on('ready', onReady);
		player.on('canPlay', onCanPlay);
		player.on('playing', onPlaying);
		player.on('complete', onComplete);
		scope.$on('playThron', ($scope, id) => {
			// console.log('ThronDirective.playThron', id, node.id, id === node.id);
			if (id === node.id) {
				playVideo();
			}
		});
		scope.$on('pauseThron', ($scope, id) => {
			// console.log('ThronDirective.pauseThron', id, node.id, id === node.id);
			if (id === node.id) {
				pauseVideo();
			}
		});
		element.on('$destroy', () => {
			player.off('ready', onReady);
			player.off('canPlay', onCanPlay);
			player.off('playing', onPlaying);
			player.off('complete', onComplete);
		});
	}

	static factory() {
		return new ThronDirective();
	}

}

ThronDirective.factory.$inject = [];
