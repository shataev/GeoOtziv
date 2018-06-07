import getAddressFromCoords from './../utils/getAdressFromCoords';
import openBalloon from './../utils/openBalloon';

const addClickHandlerToMap = (map) => {
	map.events.add('click', (e) => {
		if (!map.balloon.isOpen()) {
			const coords = e.get('coords');
			const adressPromise = getAddressFromCoords(coords);

			adressPromise.then(adress => {
				let pointData = {
					coords: coords,
					adress: adress
				};

                openBalloon(map, pointData);
			});
		} else {
			map.balloon.close();
		}
	})
};

export default addClickHandlerToMap;