import initMap from './init';
import config from './config';
import makeClusterer from './clusterer';
import mapClick from './../events/mapClick';
import addButtonClick from './../events/addButtonClick';
import carouselItemClick from './../events/carouselItemClick';
import getData from '../utils/reviews/getReviewsFromDatabase';

const mapMaker = () => {
    ymaps.ready(() => {
        let map = initMap(config);
        let clusterer = makeClusterer();

        let dataPromise = getData();
        dataPromise.then(data => {
            console.log(data);
        });

        map.geoObjects.add(clusterer);

		mapClick(map, clusterer);
        addButtonClick(map, clusterer);
		carouselItemClick(map);
    });
};

export default mapMaker;
