import PopupWithForm from "./PopupWithForm.js"

function EditProfilePopup({isOpen, onClose}) {
	return (
		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			buttonText="Сохранить">
			<input
				name="name"
				id="name-input"
				className="popup__field form__input popup__field_type_profile-name"
				type="text"
				defaultValue=""
				minLength="2" maxLength="40"
				required
			/>
			<span className="name-input-error form__error-message"></span>
			<input
				name="about"
				id="occupation-input"
				className="popup__field form__input popup__field_type_profile-occupation"
				type="text"
				defaultValue=""
				minLength="2" maxLength="200"
				required
			/>
			<span className="occupation-input-error form__error-message"></span>
		</PopupWithForm>
	)
}

export default EditProfilePopup;