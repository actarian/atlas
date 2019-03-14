/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class VideoDirective {

	constructor(
		$timeout,
		ApiService
	) {
		this.$timeout = $timeout;
		this.apiService = ApiService;
		this.restrict = 'A';
		this.transclude = true;
		this.template = `<div class="media">
		<ng-transclude></ng-transclude>
	</div>
	<div class="overlay" ng-click="onOverlay()"></div>
				<div class="btn btn--play" ng-class="{ playing: playing }">
					<svg class="icon icon--play" ng-if="!playing"><use xlink:href="#play"></use></svg>
					<svg class="icon icon--play" ng-if="playing"><use xlink:href="#pause"></use></svg>
				</div><wishlist item="item"></wishlist>
				`;
		this.scope = {
			item: '=?video',
		};
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const video = node.querySelector('video');
		scope.item = scope.item || {};
		scope.onOverlay = () => {
			if (video) {
				if (video.paused) {
					video.play();
				} else {
					video.pause();
				}
			}
		};
		const onPlay = () => {
			this.$timeout(() => {
				this.playing = true;
			});
		};
		const onPause = () => {
			this.$timeout(() => {
				this.playing = false;
			});
		};
		const onEnded = () => {
			this.$timeout(() => {
				this.playing = false;
			});
		};
		const onTimeUpdate = () => {
			console.log(video.currentTime, video.duration);
		};
		if (video) {
			video.addEventListener('play', onPlay);
			video.addEventListener('pause', onPause);
			video.addEventListener('ended', onEnded);
			video.addEventListener('timeupdate', onTimeUpdate);
		}
		element.on('$destroy', () => {
			if (video) {
				video.removeEventListener('play', onPlay);
				video.removeEventListener('pause', onPause);
				video.removeEventListener('ended', onEnded);
				video.removeEventListener('timeupdate', onTimeUpdate);
			}
		});
	}

	static factory($timeout, ApiService) {
		return new VideoDirective($timeout, ApiService);
	}

}

VideoDirective.factory.$inject = ['$timeout', 'ApiService'];
