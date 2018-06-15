import reviewList from '../../../templates/reviewList.hbs'

const updateReviewList = (listContainer, adress) => {
	const listData = {
		reviews: window.myStorage.get(adress)
	};
	const reviewListHTML = reviewList(listData);

	listContainer.innerHTML = reviewListHTML;
};

export default updateReviewList;