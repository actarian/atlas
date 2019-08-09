/* jshint esversion: 6 */

export default class MediaDirective {

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
<div class="overlay" ng-click="onOverlay()"></div>
<div class="btn btn--pinterest" ng-click="onPin()" ng-if="onPin">
	<svg class="icon icon--pinterest"><use xlink:href="#pinterest"></use></svg>
</div>
<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
	<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
</div>`;
		this.scope = {
			item: '=?media',
		};
	}

	link(scope, element, attributes, controller) {
		scope.item = scope.item || {};
		const node = element[0];
		const img = node.querySelector('img');
		if (img) {
			const pageTitle = document.title;
			scope.onPin = () => {
				const pin = {
					url: window.location.href,
					media: img.src,
					description: img.title || pageTitle,
				};
				// console.log('MediaDirective.onPin', pin);
				PinUtils.pinOne(pin);
			};
		}
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
					console.log('MediaDirective.onClickWishlist', has);
				},
				(error) => {
					console.log(error);
				}
			);
			// event.preventDefault();
			// event.stopPropagation();
		};
		scope.onOverlay = (event) => {
			const btnGallery = node.nextElementSibling && node.nextElementSibling.querySelector('.btn--gallery');
			if (btnGallery !== null) {
				console.log(btnGallery);
				btnGallery.click();
				return;
			}
			if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal')) {
				this.$timeout(() => {
					let index = 0;
					const items = [...document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video]')].map((itemNode, i) => {
						if (itemNode == node) {
							index = i;
						}
						const item = {};
						item.type = itemNode.hasAttribute('media') ? 'media' : 'video';
						if (item.type === 'media') {
							const img = itemNode.querySelector('img');
							if (img) {
								item.src = img.getAttribute('src') || img.getAttribute('data-src');
								item.title = img.getAttribute('alt');
								const wishlist = itemNode.getAttribute('media');
								if (wishlist) {
									item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
								}
							} else {
								console.log(itemNode, img);
							}
						} else {
							const video = itemNode.querySelector('video');
							const source = video.querySelector('source');
							item.poster = video.getAttribute('poster');
							item.src = source.getAttribute('src');
							item.title = video.getAttribute('alt');
							const wishlist = itemNode.getAttribute('video');
							if (wishlist) {
								item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
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
		element.on('$destroy', () => {});
	}

	static factory($timeout, WishlistService) {
		return new MediaDirective($timeout, WishlistService);
	}

}

MediaDirective.factory.$inject = ['$timeout', 'WishlistService'];
