// Workaround for Edge 16+, which only implemented object-fit for <img> tags
// TODO: Keep an eye on Edge to determine which version has full final support
const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
const edgePartialSupport = edgeVersion ?
	parseInt(edgeVersion[1], 10) >= 16 :
	false;

// If the browser does support object-fit, we don't need to continue
const hasSupport = 'objectFit' in document.documentElement.style !== false;

export default class ObjectFitDirective {

	constructor(
		DomService
	) {
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		// console.log('ObjectFitDirective', node);

		// if the page is being rendered on the server, don't continue
		if (typeof window === 'undefined') {
			return;
		}

		if (hasSupport && !edgePartialSupport) {
			return;
		}

		this.polyfill(node);

		/*
			if (typeof node === 'undefined' || node instanceof Event) {
				// If left blank, or a default event, all node on the page will be polyfilled.
				node = document.querySelectorAll('[data-object-fit]');
			} else if (node && node.nodeName) {
				// If it's a single node, wrap it in an array so it works.
				node = [node];
			} else if (typeof node === 'object' && node.length && node[0].nodeName) {
				// If it's an array of DOM nodes (e.g. a jQuery selector), it's fine as-is.
				node = node;
			} else {
				// Otherwise, if it's invalid or an incorrect type, return false to let people know.
				return false;
			}
		*/

		const polyfill = () => {
			this.polyfill(node);
		};
		window.addEventListener('resize', polyfill);
		scope.$on('$destroy', () => {
			window.removeEventListener('resize', polyfill);
		});

	}

	polyfill(node) {
		const nodeName = node.nodeName.toLowerCase();
		const objectFit = () => {
			this.objectFit(node);
		};
		if (nodeName === 'img') {
			if (edgePartialSupport) {
				return;
				// Edge supports object-fit for images (but nothing else), so no need to polyfill
			}
			if (node.complete) {
				this.objectFit(node);
			} else {
				node.addEventListener('load', objectFit);
			}
		} else if (nodeName === 'video') {
			if (node.readyState > 0) {
				this.objectFit(node);
			} else {
				node.addEventListener('loadedmetadata', objectFit);
			}
		} else {
			this.objectFit(node);
		}
	}

	objectFit(node) {
		console.log('ObjectFitDirective.objectFit', node);
		// IE 10- data polyfill
		let fit = node.dataset ?
			node.dataset.objectFit :
			node.getAttribute('data-object-fit');
		let position = node.dataset ?
			node.dataset.objectPosition :
			node.getAttribute('data-object-position');
		// Default fallbacks
		fit = fit || 'cover';
		position = position || '50% 50%';
		// If necessary, make the parent container work with absolutely positioned elements
		const parentNode = node.parentNode;
		this.checkParentContainer(parentNode);
		// Check for any pre-set CSS which could mess up image calculations
		this.checkMediaProperties(node);
		// Reset any pre-set width/height CSS and handle fit positioning
		node.style.position = 'absolute';
		node.style.width = 'auto';
		node.style.height = 'auto';
		// `scale-down` chooses either `none` or `contain`, whichever is smaller
		if (fit === 'scale-down') {
			if (
				node.clientWidth < parentNode.clientWidth &&
				node.clientHeight < parentNode.clientHeight
			) {
				fit = 'none';
			} else {
				fit = 'contain';
			}
		}
		// `none` (width/height auto) and `fill` (100%) and are straightforward
		if (fit === 'none') {
			this.setPosition('x', node, position);
			this.setPosition('y', node, position);
			return;
		}
		if (fit === 'fill') {
			node.style.width = '100%';
			node.style.height = '100%';
			this.setPosition('x', node, position);
			this.setPosition('y', node, position);
			return;
		}
		// `cover` and `contain` must figure out which side needs covering, and add CSS positioning & centering
		node.style.height = '100%';
		if ((fit === 'cover' && node.clientWidth > parentNode.clientWidth) ||
			(fit === 'contain' && node.clientWidth < parentNode.clientWidth)) {
			node.style.top = '0';
			node.style.marginTop = '0';
			this.setPosition('x', node, position);
		} else {
			node.style.width = '100%';
			node.style.height = 'auto';
			node.style.left = '0';
			node.style.marginLeft = '0';
			this.setPosition('y', node, position);
		}
	}

	checkParentContainer(parentNode) {
		const styles = window.getComputedStyle(parentNode, null);
		const position = styles.getPropertyValue('position');
		const overflow = styles.getPropertyValue('overflow');
		const display = styles.getPropertyValue('display');
		if (!position || position === 'static') {
			parentNode.style.position = 'relative';
		}
		if (overflow !== 'hidden') {
			parentNode.style.overflow = 'hidden';
		}
		// Guesstimating that people want the parent to act like full width/height wrapper here.
		// Mostly attempts to target <picture> elements, which default to inline.
		if (!display || display === 'inline') {
			parentNode.style.display = 'block';
		}
		if (parentNode.clientHeight === 0) {
			parentNode.style.height = '100%';
		}
		// Add a CSS class hook, in case people need to override styles for any reason.
		if (parentNode.className.indexOf('object-fit-polyfill') === -1) {
			parentNode.className = parentNode.className + ' object-fit-polyfill';
		}
	}

	checkMediaProperties(node) {
		const styles = window.getComputedStyle(node, null);
		const constraints = {
			'max-width': 'none',
			'max-height': 'none',
			'min-width': '0px',
			'min-height': '0px',
			top: 'auto',
			right: 'auto',
			bottom: 'auto',
			left: 'auto',
			'margin-top': '0px',
			'margin-right': '0px',
			'margin-bottom': '0px',
			'margin-left': '0px',
		};
		for (let property in constraints) {
			const constraint = styles.getPropertyValue(property);
			if (constraint !== constraints[property]) {
				node.style[property] = constraints[property];
			}
		}
	}

	setPosition(axis, node, objectPosition) {
		let position, other, start, end, side;
		objectPosition = objectPosition.split(' ');
		if (objectPosition.length < 2) {
			objectPosition[1] = objectPosition[0];
		}
		if (axis === 'x') {
			position = objectPosition[0];
			other = objectPosition[1];
			start = 'left';
			end = 'right';
			side = node.clientWidth;
		} else if (axis === 'y') {
			position = objectPosition[1];
			other = objectPosition[0];
			start = 'top';
			end = 'bottom';
			side = node.clientHeight;
		} else {
			return; // Neither x or y axis specified
		}
		if (position === start || other === start) {
			node.style[start] = '0';
			return;
		}
		if (position === end || other === end) {
			node.style[end] = '0';
			return;
		}
		if (position === 'center' || position === '50%') {
			node.style[start] = '50%';
			node.style['margin-' + start] = side / -2 + 'px';
			return;
		}
		// Percentage values (e.g., 30% 10%)
		if (position.indexOf('%') !== -1) {
			position = parseInt(position);
			if (position < 50) {
				node.style[start] = position + '%';
				node.style['margin-' + start] = side * (position / -100) + 'px';
			} else {
				position = 100 - position;
				node.style[end] = position + '%';
				node.style['margin-' + end] = side * (position / -100) + 'px';
			}
			return;
		} else {
			// Length-based values (e.g. 10px / 10em)
			node.style[start] = position;
		}
		node.style.position = 'absolute';
	}

	static factory(DomService) {
		return new ObjectFitDirective(DomService);
	}

}

ObjectFitDirective.factory.$inject = ['DomService'];
