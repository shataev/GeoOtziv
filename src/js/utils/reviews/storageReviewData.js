const addReviewDataToLocalStorage = (pointData) => {
	if (!window.myStorage) {
		window.myStorage = new Map;
	}

	let storageMap = window.myStorage;
	let key = pointData.adress;

	if (!storageMap.has(key)) {
		storageMap.set(key, [pointData.review])
	} else {
		let reviews = storageMap.get(key);

		reviews.push(pointData.review);
		storageMap.set(key, reviews);
	}
};

export default addReviewDataToLocalStorage;