import createItemContentLayout from '../utils/balloon/createItemContentLayout';

let makeClusterer = () => {
    let clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
		clusterBalloonContentLayout: 'cluster#balloonCarousel',
		clusterBalloonItemContentLayout: createItemContentLayout(),
		clusterOpenBalloonOnClick: true,
        clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false
    });

    return clusterer
};

export default makeClusterer;