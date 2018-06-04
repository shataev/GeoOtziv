import baloon from './../../templates/baloon.hbs';

let createBalloonContentLayout = (pointData) => {
    let baloonHTML = baloon(pointData);

    let customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        baloonHTML
    );

    return customBalloonContentLayout;
};

export default createBalloonContentLayout;
