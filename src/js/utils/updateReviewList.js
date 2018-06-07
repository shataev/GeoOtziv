import reviewList from './../../templates/review-list.hbs'

const updateReviewList = (listContainer, adress) => {
	const listData = {
		reviews: window.myStorage.get(adress)
	};
	const reviewListHTML = reviewList(listData);

	listContainer.innerHTML = reviewListHTML;
};

export default updateReviewList;