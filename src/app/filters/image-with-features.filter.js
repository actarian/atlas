/* jshint esversion: 6 */


export function ImageWithFeatures() {
	return (images, features) => {
		if (!images) {
			return null;
		}
		if (!images.length) {
			return null;
		}
		if (images.length === 1 || !features || features[0] === null) {
			return images[0].url;
		}
		const image = images.find(image => {
			let has = true;
			features.forEach(f => has = has && image.features.indexOf(f) !== -1);
			return has;
		});
		if (image) {
			return image.url;
		} else {
			return images[0].url;
		}
	};
}
