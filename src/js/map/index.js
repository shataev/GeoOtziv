import initMap from './init';
import config from './config';
import makeClusterer from './clusterer';
import mapClick from './../events/mapClick';
import addButtonClick from './../events/addButtonClick';
import carouselItemClick from './../events/carouselItemClick';
import addInitialReviewsToMap from '../utils/reviews/addInitialReviewsToMap';

const mapMaker = () => {
    ymaps.ready(() => {
        let map = initMap(config);
        let clusterer = makeClusterer();

        addInitialReviewsToMap(clusterer);

        map.geoObjects.add(clusterer);

		mapClick(map, clusterer);
        addButtonClick(map, clusterer);
		carouselItemClick(map);
    });
};

export default mapMaker;
