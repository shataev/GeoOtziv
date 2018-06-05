// Определяем адрес по координатам (обратное геокодирование).
const getAddressFromCoords = (coords) => {
	return ymaps.geocode(coords).then((res) => {
		let adress;
		let firstGeoObject = res.geoObjects.get(0);

		adress = firstGeoObject.getAddressLine();

		return adress;
	});
};

export default getAddressFromCoords;