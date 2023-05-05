function ImagePopup() {
	return(
		<div className="popup popup_type_image">
			<figure className="popup__container-image overlay">
					<button className="popup__close-button" aria-label="Закрыть" type="button"></button>
					<div className="popup__container-wrap">
							<img src="#" alt="#" className="popup__image"/>
							<figcaption className="popup__figcaption"></figcaption>
					</div>
			</figure>
		</div>
	)
}

export default ImagePopup;