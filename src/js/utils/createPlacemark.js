import createBalloonLayout from './createBalloonLayout';
import createBalloonContentLayout from './createBalloonContentLayout';

const createPlacemark = (map, pointData) => {
	let myPlacemark = window.myPlacemark = new ymaps.Placemark(pointData.coords, {
	}, {
		balloonShadow: false,
		balloonLayout: createBalloonLayout(),
		balloonContentLayout: createBalloonContentLayout(pointData),
		balloonPanelMaxMapArea: 0,
		hideIconOnBalloonOpen: true,
	});

	return myPlacemark
};

export default createPlacemark;