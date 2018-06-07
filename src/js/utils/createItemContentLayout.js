import carousellItem from './../../templates/carouselItem.hbs';

const createItemContentLayout = () => {
	return  ymaps.templateLayoutFactory.createClass(
		// Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
		carousellItem({
			adress: '{{properties.pointData.adress}}',
			coords:'{{properties.pointData.coords}}',
			place: '{{properties.pointData.review.place}}',
			text: '{{properties.pointData.review.text}}',
			date: '{{properties.pointData.review.dateString}}',
		})
	);
};

export default createItemContentLayout;