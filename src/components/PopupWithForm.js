function PopupWithForm({name, title, children, isOpen, onClose}) {
	return(
			<div className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`} >
					<div className="popup__container overlay">
							<button 
								className="popup__close-button" 
								type="button"
								onClick={onClose}
								buttonText= "Закрыть"
								/>
							<p className="popup__title">{title}</p>
							<form action="#" name={`form__${name}`} className="form">
									{children}
									<button type="submit" className="popup__submit-button popup__submit-button_type_profile">Сохранить</button>
							</form>
					</div>
			</div>
	)
}

export default PopupWithForm;