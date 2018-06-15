import createBalloonLayout from './createBalloonLayout';
import createBalloonContentLayout from './createBalloonContentLayout';

const openBalloon = (map, pointData) => {
    map.balloon.open(pointData.coords, pointData, {
        layout: createBalloonLayout(),
        contentLayout: createBalloonContentLayout(pointData),
        closeButton: false
    });
};

export default openBalloon;