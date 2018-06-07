import createPlacemark from './../utils/createPlacemark';
import getReviewDataFromForm from './../utils/getReviewDataFromForm';
import clearFormFields from './../utils/clearFormFields';
import addReviewDataToLocalStorage from './../utils/storageReviewData';
import updateReviewList from './../utils/updateReviewList';
import validateForm from './../utils/validateForm';
import showHideInvalidMessage from './../utils/showHideInvalidMessage';

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
				const placemark = createPlacemark(map, newPointData);

				addReviewDataToLocalStorage(newPointData);

				clusterer.add(placemark);

				clearFormFields(form);

				updateReviewList(reviewListContainer, newPointData.adress);
            }
        }
    })
};

export default addButtonClickHandler;