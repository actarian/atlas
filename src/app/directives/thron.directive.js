/* jshint esversion: 6 */

let ID = 0;

export default class ThronDirective {

	constructor() {
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const THRON = window['THRONContentExperience'] || window['THRONPlayer'];
		if (!THRON) {
			return;
		}
		const node = element[0];
		node.id = `thron-${++ID}`;
		const player = THRON(node.id, {
			media: node.getAttribute('data-thron'),
			muted: true,
			autoplay: false,
			linkedContent: 'hide',
			noSkin: true,
		});
		player.on('ready', () => {
			const mediaContainer = player.mediaContainer();
			const video = mediaContainer.querySelector('video');
			video.setAttribute('playsinline', 'true');
			video.setAttribute('loop', 'true');
			// video.setAttribute('autoplay', 'true');
		});
		scope.$on('playThron', ($scope, id) => {
			if (id === node.id) {
				const status = player.status();
				if (status && status.ready && !status.playing) {
					// console.log('playThron', status);
					player.play();
				}
			}
		});
		scope.$on('pauseThron', ($scope, id) => {
			if (id === node.id) {
				const status = player.status();
				if (status && status.playing) {
					// console.log('pauseThron', status);
					player.pause();
				}
			}
		});
		element.on('$destroy', () => {});
	}

	static factory() {
		return new ThronDirective();
	}

}

ThronDirective.factory.$inject = [];
