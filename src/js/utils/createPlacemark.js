import createBalloonLayout from './createBalloonLayout';
import createBalloonContentLayout from './createBalloonContentLayout';

const createPlacemark = (map, pointData) => {
	let coords = pointData.coords ? pointData.coords : pointData.geometry.getCoordinates();
	let myPlacemark = window.myPlacemark = new ymaps.Placemark(coords, {
		pointData: pointData
	},{
		balloonShadow: false,
		balloonLayout: createBalloonLayout(),
		balloonContentLayout: createBalloonContentLayout(pointData),
		balloonPanelMaxMapArea: 0,
		hideIconOnBalloonOpen: true,
		preset: 'islands#violetIcon',
	});

	return myPlacemark
};

export default createPlacemark;