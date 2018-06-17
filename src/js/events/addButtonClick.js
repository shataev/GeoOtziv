import createPlacemark from './../utils/createPlacemark';
import getReviewDataFromForm from '../utils/reviews/getReviewDataFromForm';
import clearFormFields from '../utils/form/clearFormFields';
import addReviewDataToLocalStorage from '../utils/reviews/storageReviewData';
import updateReviewList from '../utils/reviews/updateReviewList';
import validateForm from '../utils/form/validateForm';
import showHideInvalidMessage from '../utils/form/showHideInvalidMessage';
import addReviewToDatabase from '../utils/reviews/addReviewToDatabase';

const addButtonClickHandler = (map, clusterer) => {
    document.body.addEventListener('click', e => {
        if (e.target.classList.contains('add-review-btn')) {
            e.preventDefault();
			const addButton = e.target;
			const form = addButton.closest('form');
            const invalidFileds = validateForm(form);
			if (invalidFileds.length > 0) {
				showHideInvalidMessage(form, invalidFileds);
            } else {
				showHideInvalidMessage(form, []);

				const pointData = map.balloon.getData();
				const reviewListContainer = form.previousElementSibling;
				const reviewData = getReviewDataFromForm(form);
				let newPointData = {
					coords: pointData.coords ? pointData.coords : pointData.geometry.getCoordinates(),
					adress: pointData.adress,
					review: reviewData
				};
				const placemark = createPlacemark(newPointData);

				addReviewDataToLocalStorage(newPointData);
                addReviewToDatabase(newPointData);

				clusterer.add(placemark);

				clearFormFields(form);

				updateReviewList(reviewListContainer, newPointData.adress);
            }
        }
    })
};

export default addButtonClickHandler;