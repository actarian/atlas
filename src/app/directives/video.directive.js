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
	<svg class="icon icon--play-progress-background"><use xlink:href="#play-progress"></use></svg>
	<svg class="icon icon--play-progress" viewBox="0 0 196 196">
		<path xmlns="http://www.w3.org/2000/svg" stroke-width="2px" stroke-dasharray="1" stroke-dashoffset="1" pathLength="1" stroke-linecap="square" d="M195.5,98c0,53.8-43.7,97.5-97.5,97.5S0.5,151.8,0.5,98S44.2,0.5,98,0.5S195.5,44.2,195.5,98z"/>
	</svg>
	<svg class="icon icon--play" ng-if="!playing"><use xlink:href="#play"></use></svg>
	<svg class="icon icon--play" ng-if="playing"><use xlink:href="#pause"></use></svg>
</div><wishlist item="item"></wishlist>`;
		this.scope = {
			item: '=?video',
		};
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const video = node.querySelector('video');
		const progress = node.querySelector('.icon--play-progress path');
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
				scope.playing = true;
			});
		};
		const onPause = () => {
			this.$timeout(() => {
				scope.playing = false;
			});
		};
		const onEnded = () => {
			this.$timeout(() => {
				scope.playing = false;
			});
		};
		const onTimeUpdate = () => {
			// console.log(video.currentTime, video.duration);
			progress.style.strokeDashoffset = video.currentTime / video.duration;
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
