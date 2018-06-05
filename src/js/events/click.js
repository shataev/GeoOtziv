import getAddressFromCoords from './../utils/getAdressFromCoords';
import createPlacemark from './../utils/createPlacemark';

import createBalloonLayout from './../utils/createBalloonLayout';
import createBalloonContentLayout from './../utils/createBalloonContentLayout';

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

				map.balloon.open(pointData.coords, "Содержимое балуна", {
					layout: createBalloonLayout(map),
					contentLayout: createBalloonContentLayout(pointData),
					closeButton: false
				});

				/*let myPlacemark = createPlacemark(map, pointData);

				clusterer.add(myPlacemark);*/

			});
		} else {
			map.balloon.close();
		}
	})
};

export default addClickHandlerToMap;