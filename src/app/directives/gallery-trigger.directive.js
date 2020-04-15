export default class GalleryTriggerDirective {

	constructor(
		$timeout,
	) {
		this.$timeout = $timeout;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const onClick = (event) => {
			let nodes = [];
			const swiperContainer = this.getParentClassName(event.target, 'swiper-container');
			if (swiperContainer) {
				nodes = Array.from(swiperContainer.querySelectorAll('[media], [video]'));
				if (nodes.length === 0) {
					nodes = Array.from(swiperContainer.querySelectorAll('.picture'));
				}
			} else {
				nodes = Array.from(document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video], .picture--square[media], .picture--square[video], .picture--gallery[media], .picture--gallery[video]'));
			}
			if (nodes.length) {
				this.$timeout(() => {
					let index = 0;
					let items = [];
					nodes.forEach((x, i) => {
						const item = {};
						if (x.hasAttribute('media')) {
							item.type = 'media';
						}
						if (x.hasAttribute('video')) {
							item.type = 'video';
						}
						const title = x.parentNode.querySelector('.title');
						if (item.type === 'video') {
							const video = x.querySelector('video');
							const sources = video.querySelectorAll('source');
							item.poster = video.getAttribute('poster');
							item.src = sources[sources.length - 1].getAttribute('src');
							item.title = title ? title.innerText : video.getAttribute('alt');
							const wishlist = x.getAttribute('video');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
						} else {
							const img = x.querySelector('img');
							item.type = 'media';
							item.src = img.getAttribute('src') || img.getAttribute('data-src');
							item.title = title ? title.innerText : img.getAttribute('alt');
							const wishlist = x.getAttribute('media');
							if (wishlist) {
								item.wishlist = this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
							}
						}
						const itemIndex = items.reduce((p, c, i) => {
							return c.src === item.src ? i : p
						}, -1);
						if (itemIndex !== -1) {
							if (x == node) {
								index = itemIndex;
							}
						} else {
							if (x == node) {
								index = items.length;
							}
							items.push(item);
						}
					});
					console.log(items);
					scope.$root.gallery = {
						index,
						items,
					};
				});
			}
			// event.preventDefault();
			// event.stopPropagation();
		};
		node.addEventListener('click', onClick);
		scope.$on('$destroy', () => {
			node.removeEventListener('click', onClick);
		});
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

	static factory($timeout) {
		return new GalleryTriggerDirective($timeout);
	}

}

GalleryTriggerDirective.factory.$inject = ['$timeout'];
