import GtmService from '../gtm/gtm.service';

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
<div class="overlay" ng-click="onOverlay($event)"></div>
<div class="share-buttons">
<div class="btn btn--pinterest" ng-click="onPin($event)" ng-if="onPin">
	<svg class="icon icon--pinterest"><use xlink:href="#pinterest"></use></svg>
</div>
<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
	<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
</div></div>`;
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
			scope.onPin = (event) => {
				event.preventDefault();
				event.stopPropagation();
				const pin = {
					url: window.location.href,
					media: img.src,
					description: img.title || pageTitle,
				};
				// console.log('MediaDirective.onPin', pin);
				GtmService.push({
					event: 'Pinterest',
					wish_name: scope.item.name || scope.item.coId,
					wish_type: scope.item.typeName || scope.item.type
				});
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
			event.preventDefault();
			event.stopPropagation();
			this.wishlistService.toggle(scope.item).then(
				(has) => {
					console.log('MediaDirective.onClickWishlist', has);
				},
				(error) => {
					console.log(error);
				}
			);
		};
		scope.onOverlay = (event) => {
			/*
			const btnGallery = node.nextElementSibling && node.nextElementSibling.querySelector('.btn--gallery');
			if (btnGallery !== null) {
				// console.log(btnGallery);
				btnGallery.click();
				return;
			}
			*/
			let nodes = [];
			const swiperWrapper = this.getParentClassName(event.target, 'swiper-wrapper');
			if (swiperWrapper) {
				nodes = Array.from(swiperWrapper.querySelectorAll('[media], [video]'));
			} else if (
				node.classList.contains('picture--vertical') ||
				node.classList.contains('picture--horizontal') ||
				node.classList.contains('picture--square') ||
				node.classList.contains('picture--gallery')) {
				nodes = Array.from(document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video], .picture--square[media], .picture--square[video], .picture--gallery[media], .picture--gallery[video]'));
			}
			if (nodes.length) {
				this.$timeout(() => {
					let index = 0;
					let items = [];
					nodes.forEach((itemNode, i) => {
						const item = {};
						item.type = itemNode.hasAttribute('media') ? 'media' : 'video';
						const title = itemNode.parentNode.querySelector('.title');
						if (item.type === 'media') {
							const img = itemNode.querySelector('img');
							item.src = img.getAttribute('src') || img.getAttribute('data-src');
							item.title = title ? title.innerText : img.getAttribute('alt');
							const wishlist = itemNode.getAttribute('media');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
							console.log(item.src);
						} else {
							const video = itemNode.querySelector('video');
							const sources = video.querySelectorAll('source');
							item.poster = video.getAttribute('poster');
							item.src = sources[sources.length - 1].getAttribute('src');
							item.title = title ? title.innerText : video.getAttribute('alt');
							const wishlist = itemNode.getAttribute('video');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
						}
						const itemIndex = items.reduce((p, c, i) => {
							return c.src === item.src ? i : p
						}, -1);
						if (itemIndex !== -1) {
							if (itemNode == node) {
								index = itemIndex;
							}
						} else {
							if (itemNode == node) {
								index = items.length;
							}
							items.push(item);
						}
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
		scope.$on('$destroy', () => {});
	}

	getParentClassName(child, className) {
		let parentNode = child.parentNode;
		while (parentNode) {
			if (parentNode.classList && parentNode.classList.contains(className)) {
				return parentNode;
			}
			parentNode = parentNode.parentNode;
		}
	}

	eval(string) {
		return new Function("return " + string + ";")();
	}

	static factory($timeout, WishlistService) {
		return new MediaDirective($timeout, WishlistService);
	}

}

MediaDirective.factory.$inject = ['$timeout', 'WishlistService'];
