import openBalloon from './../utils/openBalloon';

const carouselItemClick = (map) => {
	document.body.addEventListener('click', e => {
		if (e.target.classList.contains('carousell-item-link')) {
			e.preventDefault();

			const link = e.target;
			const coords = link.dataset.coords.split(',').map(coordItem => {
				return +coordItem;
			});
			const adress = link.dataset.adress;
			const reviews = window.myStorage.get(adress);

			let pointData = {
				coords,
				adress,
				reviews
			};

			openBalloon(map, pointData);
		}
	})
};

export default carouselItemClick;