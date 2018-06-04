import initMap from './init';
import {container} from './config';
import makeClusterer from './clusterer';
import getGeoObjects from './../points/geoObjects';

const mapMaker = () => {
    ymaps.ready(() => {
        let myMap = initMap(container);
        let clusterer = makeClusterer();


        let points = [
            {
                adress: 'adress',
                coords: [55.831903, 37.411961],
                reviews: [
                    {
                        author: 'svetlana',
                        place: 'Шоколадница',
                        date: '13.13.2015',
                        text: 'Очень хорошее место'
                    }
                ]
            }
        ];

        let geoObjects = getGeoObjects(points);

        clusterer.add(geoObjects);

        myMap.geoObjects.add(clusterer);
    });
};

export default mapMaker;
