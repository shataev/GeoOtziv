import initMap from './init';
import config from './config';
import makeClusterer from './clusterer';
import addClickHandlerToMap from './../events/addClickHandlerToMap';
import addButtonClickHandler from './../events/addButtonClickHandler';
import carouselItemClick from './../events/carouselItemClick';

const mapMaker = () => {
    ymaps.ready(() => {
        let map = initMap(config);
        let clusterer = makeClusterer();

        map.geoObjects.add(clusterer);

		addClickHandlerToMap(map, clusterer);
        addButtonClickHandler(map, clusterer);
		carouselItemClick(map);
    });
};

export default mapMaker;
