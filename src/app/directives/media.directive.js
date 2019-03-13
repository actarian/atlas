/* jshint esversion: 6 */
/* global window, document, angular, Swiper, TweenMax, TimelineMax */

export default class MediaDirective {

	constructor(
		$timeout,
		DomService
	) {
		this.$timeout = $timeout;
		this.domService = DomService;
		this.restrict = 'C';
		this.transclude = true;
		this.template = (element, attributes) => {
			if (attributes.controls !== undefined) {
				return `<ng-transclude></ng-transclude>
				<div class="overlay" ng-click="onOverlay()"></div>
				<div class="btn btn--play" ng-class="{ playing: playing }">
					<svg class="icon icon--play" ng-if="!playing"><use xlink:href="#play"></use></svg>
					<svg class="icon icon--play" ng-if="playing"><use xlink:href="#pause"></use></svg>
				</div>
				<div class="btn btn--wishlist" ng-class="{ added: item.added }" ng-click="onWishlist()">
					<svg class="icon icon--wishlist" ng-if="!item.added"><use xlink:href="#wishlist"></use></svg>
					<svg class="icon icon--wishlist" ng-if="item.added"><use xlink:href="#wishlist-added"></use></svg>
				</div>`;
			} else {
				return `<ng-transclude></ng-transclude>
			<div class="overlay" ng-click="onOverlay()"></div>
			<div class="btn btn--wishlist" ng-class="{ added: item.added }" ng-click="onWishlist()">
				<svg class="icon icon--wishlist" ng-if="!item.added"><use xlink:href="#wishlist"></use></svg>
				<svg class="icon icon--wishlist" ng-if="item.added"><use xlink:href="#wishlist-added"></use></svg>
			</div>`;
			}
		};
		this.scope = {
			item: '=?',
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
		scope.onWishlist = () => {
			scope.item.added = !scope.item.added;
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

	static factory($timeout, DomService) {
		return new MediaDirective($timeout, DomService);
	}

}

MediaDirective.factory.$inject = ['$timeout', 'DomService'];
