const initMap = (config) => {
    let myMap = new ymaps.Map(config.container, {
        center: config.center,
        zoom: config.zoom
    });

    return myMap;
};

export default initMap;
