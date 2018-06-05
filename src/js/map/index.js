import initMap from './init';
import config from './config';
import makeClusterer from './clusterer';
import addClickHandlerToMap from './../events/click';

const mapMaker = () => {
    ymaps.ready(() => {
        let myMap = initMap(config);
        let clusterer = makeClusterer();

        myMap.geoObjects.add(clusterer);

		addClickHandlerToMap(myMap, clusterer);

    });
};

export default mapMaker;
