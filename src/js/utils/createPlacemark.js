import createBalloonLayout from './balloon/createBalloonLayout';
import createBalloonContentLayout from './balloon/createBalloonContentLayout';

const createPlacemark = (pointData) => {
	let coords = pointData.coords ? pointData.coords : pointData.geometry.getCoordinates();
	let myPlacemark = new ymaps.Placemark(coords, {
		pointData: pointData
	},{
		balloonShadow: false,
		balloonLayout: createBalloonLayout(),
		balloonContentLayout: createBalloonContentLayout(pointData),
		balloonPanelMaxMapArea: 0,
		hideIconOnBalloonOpen: true,
		preset: 'islands#violetIcon',
	});

	return myPlacemark;
};

export default createPlacemark;