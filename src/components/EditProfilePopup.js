import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js"
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	// Подписка на контекст
	const currentUser = useContext(CurrentUserContext);

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser])

	function handleSubmit(evt) {
		evt.preventDefault();
		// Передаём значения управляемых компонентов во внешний обработчик
		onUpdateUser({
			name,
			about: description,
		});
	}

	function handleNameChange(evt) {
		setName(evt.target.value);
	}

	function handleAboutChange(evt) {
		setDescription(evt.target.value);
	}

	return (
		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			buttonText="Сохранить">
			<input
				value={name}
				onChange={handleNameChange}
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
				value={description}
				onChange={handleAboutChange}
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