import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {

	return (
		<PopupWithForm
			name="add"
			title="Новое место"
			isOpen={isOpen}
			onClose={onClose}
			buttonText="Создать">
			<input
				name="add__title"
				id="title-input"
				type="text"
				defaultValue=""
				className="popup__field form__input"
				placeholder="Название"
				minLength="2" maxLength="30"
				required
			/>
			<span className="title-input-error form__error-message"></span>
			<input
				name="add__link"
				id="link-input"
				type="url"
				defaultValue=""
				className="popup__field form__input"
				placeholder="Ссылка на картинку"
				required
			/>
			<span className="link-input-error form__error-message"></span>
		</PopupWithForm>
	)
}
	
export default AddPlacePopup;