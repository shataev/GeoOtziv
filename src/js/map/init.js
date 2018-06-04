const initMap = (container) => {
    let myMap = new ymaps.Map(container, {
        center: [55.76, 37.64],
        zoom: 7
    });

    return myMap;
};

export default initMap;
