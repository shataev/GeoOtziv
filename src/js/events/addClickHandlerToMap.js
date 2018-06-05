import getAddressFromCoords from './../utils/getAdressFromCoords';
import openBalloon from './../utils/openBalloon';
import addButtonClickHandler from './../events/addButtonClickHandler';

const addClickHandlerToMap = (map, clusterer) => {
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
                //addButtonClickHandler(map, pointData, clusterer);
			});
		} else {
			map.balloon.close();
		}
	})
};

export default addClickHandlerToMap;