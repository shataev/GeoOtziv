import formatDate from '../formatDate';

const getReviewDataFromForm = (form) => {
	const author = form['author'].value;
	const place = form['place'].value;
	const text = form['text'].value;
	const date = new Date();

	const reviewData = {
		author: author,
		place: place,
		text: text,
		date: date,
		dateString: formatDate(date)
	};

	return reviewData;
};

export default getReviewDataFromForm;