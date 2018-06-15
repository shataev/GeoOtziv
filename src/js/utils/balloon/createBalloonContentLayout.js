import balloon from '../../../templates/balloon.hbs';

let createBalloonContentLayout = (pointData) => {
    let baloonHTML = balloon(pointData);
    let balloonContentLayout = ymaps.templateLayoutFactory.createClass(baloonHTML);

    return balloonContentLayout;
};

export default createBalloonContentLayout;
