import baloon from '../../templates/baloon.hbs';

let createBalloonContentLayout = (pointData) => {
    let baloonHTML = baloon(pointData);
    let balloonContentLayout = ymaps.templateLayoutFactory.createClass(
        baloonHTML
    );

    return balloonContentLayout;
};

export default createBalloonContentLayout;
