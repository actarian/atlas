


export function TrustedFilter($sce) {
	return (url) => {
		return $sce.trustAsResourceUrl(url);
	};
}
