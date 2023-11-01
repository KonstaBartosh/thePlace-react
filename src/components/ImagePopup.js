function ImagePopup({card, isOpen, onClose}) {
	//* Закрытие попапов по клику на оверлей*/
	function handleOverlayClick(evt) {
		if (evt.target === evt.currentTarget) {
			onClose();
		}
	}

	return(
		<div className={`popup popup_type_image ${isOpen && "popup_opened"}`} onClick={handleOverlayClick}>
			<figure className="popup__container-image">
					<button 
						className="popup__close-button" 
						aria-label="Закрыть" 
						type="button"
						onClick={onClose}
						>
					</button>
					<div className="popup__container-wrap">
							<img className="popup__image" src={card.link} alt={card.name}/>
							<figcaption className="popup__figcaption">{card.name}</figcaption>
					</div>
			</figure>
		</div>
	)
}

export default ImagePopup;