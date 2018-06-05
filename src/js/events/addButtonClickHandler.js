import createPlacemark from './../utils/createPlacemark';

const addButtonClickHandler = (map, clusterer) => {
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('add-review-btn')) {
            e.preventDefault();

            const addButton = e.target;
            const form = addButton.closest('form');
            const author = form['author'].value;
            const place = form['place'].value;
            const text = form['text'].value;
            const pointData = map.balloon.getData();
            const reviewData = {
                author: author,
                place: place,
                text: text,
                date: new Date()
            };

            if (pointData.reviews) {
                pointData.reviews.push(reviewData);
            } else {
                pointData.reviews = [reviewData];
            }

            const placemark = createPlacemark(map, pointData);

            clusterer.add(placemark);
        }
    })
};

export default addButtonClickHandler;