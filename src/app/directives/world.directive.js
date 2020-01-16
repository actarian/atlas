


// let INDEX = 0;

export default class WorldDirective {

	// src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="

	constructor(
		$timeout,
		DomService
	) {
		this.$timeout = $timeout;
		this.domService = DomService;
		this.restrict = 'A';
	}

	link(scope, element, attributes, controller) {
		const node = element[0];
		const img = node.querySelector('img');
		const nodePoints = node.querySelector('.points');
		const /*onEnter*/onClick = (event) => {
			event.stopImmediatePropagation();
			[...node.querySelectorAll('.world__point')].forEach(x => {
				if (x === event.currentTarget) {
					x.classList.add('active');
				} else {
					x.classList.remove('active');
				}
			});
		};
		const onLeave = (event) => {
			event.currentTarget.parentNode.classList.remove('active');
		};
		img.onload = () => {
			const offices = window.offices;
			const w = node.offsetWidth;
			const h = node.offsetHeight;
			const points = offices.forEach(x => {
				const position = x.position;
				const latitude = position.latitude;
				const top = (h * 1.169) / 180 * (-latitude + 90);
				const longitude = position.longitude;
				const left = w / 360 * (longitude + 180) - 30;
				const pointNode = this.makePoint(x);
				TweenMax.set(pointNode, { top: (top / h * 100) + '%', left: (left / w * 100) + '%' });
				nodePoints.appendChild(pointNode);
				node.addEventListener('click', onClick);
				pointNode.addEventListener('click', onClick);
				//pointNode.addEventListener('mouseenter', onEnter);
				//const pointInfoNode = pointNode.querySelector('.world__info');
				//pointInfoNode.addEventListener('mouseleave', onLeave);
			});
		};
		element.on('$destroy', () => {
			node.removeEventListener('click', onClick);
			[...node.querySelectorAll('.world__point')].forEach(node => {
				node.removeEventListener('click', onClick);
			});
			//[...node.querySelectorAll('.world__point')].forEach(node => {
			//	node.removeEventListener('mouseenter', onEnter);
			//});
			//[...node.querySelectorAll('.world__point .world__info')].forEach(node => {
			//	node.removeEventListener('mouseleave', onLeave);
			//});
		});
	}

	makePoint(point) {
		const pointNode = document.createElement('div');
		pointNode.classList.add('world__point');
		if (point.headquarter) {
			pointNode.classList.add('world__point--headquarter');
		}
		let cta = point.url ? `
		<div class="group group--cta">
			<a href="${point.url}" class="btn btn--link"><span>${window.BOMLabels.More_info}</span></a>
		</div>
		` : '';
		pointNode.innerHTML = `
		<div class="world__info">
			<div><span class="city">${point.city}</span> <span class="country">${point.country}</span></div>
			<div class="abstract">${point.abstract}</div>
			${cta}
		</div>
		`;
		return pointNode;
	}

	static factory($timeout, DomService) {
		return new WorldDirective($timeout, DomService);
	}

}

WorldDirective.factory.$inject = ['$timeout', 'DomService'];
