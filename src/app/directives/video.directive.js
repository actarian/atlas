import GtmService from '../gtm/gtm.service';

export default class VideoDirective {

	constructor(
		$timeout,
		WishlistService
	) {
		this.$timeout = $timeout;
		this.wishlistService = WishlistService;
		this.restrict = 'A';
		this.transclude = true;
		this.template = `<div class="media">
	<ng-transclude></ng-transclude>
</div>
<div class="overlay" ng-click="onOverlay($event)"></div>
<div class="btn btn--play" ng-class="{ playing: playing }">
	<svg class="icon icon--play-progress-background"><use xlink:href="#play-progress"></use></svg>
	<svg class="icon icon--play-progress" viewBox="0 0 196 196">
		<path xmlns="http://www.w3.org/2000/svg" stroke-width="2px" stroke-dasharray="1" stroke-dashoffset="1" pathLength="1" stroke-linecap="square" d="M195.5,98c0,53.8-43.7,97.5-97.5,97.5S0.5,151.8,0.5,98S44.2,0.5,98,0.5S195.5,44.2,195.5,98z"/>
	</svg>
	<svg class="icon icon--play" ng-if="!playing"><use xlink:href="#play"></use></svg>
	<svg class="icon icon--play" ng-if="playing"><use xlink:href="#pause"></use></svg>
</div><div class="btn btn--pinterest" ng-click="onPin()" ng-if="onPin">
<svg class="icon icon--pinterest"><use xlink:href="#pinterest"></use></svg>
</div>
<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
	<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
</div>
<div class="btn btn--zoom" ng-click="onClickZoom($event)">
	<svg class="icon icon--zoom"><use xlink:href="#zoom"></use></svg>
</div>`;
		this.scope = {
			item: '=?video',
		};
	}

	link(scope, element, attributes, controller) {
		scope.item = scope.item || {};
		const node = element[0];
		const video = node.querySelector('video');
		if (video) {
			const pageTitle = document.title;
			scope.onPin = () => {
				const pin = {
					url: window.location.href,
					media: video.poster,
					description: video.title || pageTitle,
				};

				GtmService.push({
					event: 'Pinterest',
					wish_name: scope.item.name || scope.item.coId,
					wish_type: scope.item.typeName || scope.item.type
				});

				// console.log('VideoDirective.onPin', pin);
				PinUtils.pinOne(pin);
			};
		}
		const progress = node.querySelector('.icon--play-progress path');
		scope.item = scope.item || {};
		scope.onOverlay = (event) => {
			if (video) {
				if (video.paused) {
					const gallery = document.querySelector('.section--gallery');
					video.muted = gallery ? false : true;
					video.play();
				} else {
					video.pause();
				}
			}
			/*
			event.preventDefault();
			event.stopImmediatePropagation();
			*/
		};
		const onPlay = () => {
			this.$timeout(() => {
				scope.playing = true;
			});
		};
		const onPlayGtm = () => {
			const sources = video.querySelectorAll('source');
			if (sources.length) {
				const src = sources[sources.length - 1].getAttribute('src');
				if (src)
					GtmService.push({
						event: 'video play',
						video_name: src
					});
			}
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
		scope.$watch(() => {
			return this.wishlistService.has(scope.item);
		}, (current, previous) => {
			// console.log(current, previous, node);
			if (scope.wishlistActive !== current) {
				scope.wishlistActive = current;
				if (current) {
					scope.wishlistActivated = true;
					this.$timeout(() => {
						scope.wishlistActivated = false;
					}, 2000);
				} else {
					scope.wishlistDeactivated = true;
					this.$timeout(() => {
						scope.wishlistDeactivated = false;
					}, 2000);
				}
			}
		});
		scope.onClickWishlist = (event) => {
			this.wishlistService.toggle(scope.item).then(
				(has) => {
					console.log('VideoDirective.onClickWishlist', has);
				},
				(error) => {
					console.log(error);
				}
			);
			// event.preventDefault();
			// event.stopPropagation();

		};
		scope.onClickZoom = (event) => {
			if (scope.$root.gallery) {
				this.$timeout(() => {
					scope.$root.gallery = null;
				});
			} else if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal') || node.classList.contains('picture--square')) {
				this.$timeout(() => {
					let index = 0;
					const items = [...document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video], .picture--square[media], .picture--square[video]')].map((itemNode, i) => {
						if (itemNode == node) {
							index = i;
						}
						const item = {};
						item.type = itemNode.hasAttribute('media') ? 'media' : 'video';
						if (item.type === 'media') {
							const img = itemNode.querySelector('img');
							item.src = img.getAttribute('src') || img.getAttribute('data-src');
							item.title = img.getAttribute('alt');
							const wishlist = itemNode.getAttribute('media');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
						} else {
							const video = itemNode.querySelector('video');
							const sources = video.querySelectorAll('source');
							item.poster = video.getAttribute('poster');
							item.src = sources[sources.length - 1].getAttribute('src');
							item.title = video.getAttribute('alt');
							const wishlist = itemNode.getAttribute('video');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
						}
						return item;
					});
					scope.$root.gallery = {
						index,
						items,
					};
				});
			}
			// event.preventDefault();
			// event.stopPropagation();
		};
		if (video) {
			video.addEventListener('play', onPlay);
			video.addEventListener('play', onPlayGtm);
			video.addEventListener('pause', onPause);
			video.addEventListener('ended', onEnded);
			video.addEventListener('timeupdate', onTimeUpdate);
		}
		scope.$on('$destroy', () => {
			if (video) {
				// console.log('VideoDirective.$destroy');
				video.removeEventListener('play', onPlay);
				video.removeEventListener('play', onPlayGtm);
				video.removeEventListener('pause', onPause);
				video.removeEventListener('ended', onEnded);
				video.removeEventListener('timeupdate', onTimeUpdate);
			}
		});
	}

	eval(string) {
		return new Function(`() => {
			return ${string};
		}`)();
	}

	static factory($timeout, WishlistService) {
		return new VideoDirective($timeout, WishlistService);
	}

}

VideoDirective.factory.$inject = ['$timeout', 'WishlistService'];
