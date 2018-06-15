const createBalloonLayout = () => {
	const balloonLayout = ymaps.templateLayoutFactory.createClass(
		'$[[options.contentLayout]]',
		{
			build: function () {
				this.constructor.superclass.build.call(this);

				const baloonEl = this.getParentElement().querySelector('.review-balloon');
				const closeBtn = baloonEl.querySelector('.close');
				const self = this;

				closeBtn.addEventListener('click', (e) => {
					self.onCloseClick(e);
				});
			},
			onCloseClick: function (e) {
				e.preventDefault();

				this.events.fire('userclose');
			}
		}
	);

	return balloonLayout;
};

export default createBalloonLayout;