import getData from '../reviews/getReviewsFromDatabase';
import createPlacemark from "./../createPlacemark";

const addInitialReviewsToMap = async (clusterer) => {
    const initialRevies = JSON.parse(await getData());

    if (initialRevies.length > 0) {
        for (const reviewItem of initialRevies) {
            const coords = reviewItem.coords.split(',').map(coord => + coord);
            const adress = reviewItem.adress;
            const review = JSON.parse(reviewItem.review);

            const placemark = createPlacemark({
                coords,
                adress,
                review
            });

            clusterer.add(placemark);
        }
    }
};

export default addInitialReviewsToMap;