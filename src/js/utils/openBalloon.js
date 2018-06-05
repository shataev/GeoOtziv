import createBalloonLayout from './../utils/createBalloonLayout';
import createBalloonContentLayout from './../utils/createBalloonContentLayout';

const openBalloon = (map, pointData) => {
    map.balloon.open(pointData.coords, pointData, {
        layout: createBalloonLayout(),
        contentLayout: createBalloonContentLayout(pointData),
        closeButton: false
    });
};

export default openBalloon;