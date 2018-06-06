import reviewList from './../../templates';

const addReviewToReviewList = (reviews, container) => {
	let reviewListHTML = reviewList(reviews);

	container.innerHTML = reviewListHTML;
};

export default addReviewToReviewList;