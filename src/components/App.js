import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
	/** Стейт-переменные */
	const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  
	/** Открытие попапов */
	function handleEditAvatarClick() {
		setAvatarPopupOpen(true);
	}
	
	function handleEditProfileClick() {
		setProfilePopupOpen(true);
	}
	
	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
	}

	/** Закрытие попапов */
	function closeAllPopups() {
		setAvatarPopupOpen(false);
		setProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
	}

  return (
		<div className="page">
			<Header/>
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
			/>
			<Footer/>
			{/* <--попапы--> */}
			<PopupWithForm 
				name="profile" 
				title="Редактировать профиль" 
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				>
				<input  
					name="name"
					id="name-input"
					className="popup__field form__input popup__field_type_profile-name"
					type="text"
					value=""
					minLength="2" maxLength="40"
					required
				/>
				<span className="name-input-error form__error-message"></span>
				<input  
					name="about"
					id="occupation-input"
					className="popup__field form__input popup__field_type_profile-occupation"
					type="text" 
					value="" 
					minLength="2" maxLength="200"
					required
				/>
				<span className="occupation-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="add" 
				title="Новое место" 
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				>
				<input  
					name="add__title"
					id="title-input"
					type="text" 
					value="" 
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
					value="" 
					className="popup__field form__input" 
					placeholder="Ссылка на картинку"
					required
					/>
					<span class="link-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="userpic" 
				title="Обновить аватар" 
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				>
				<input  
					name="avatar"
					id="avatar-input"
					type="url" 
					value="" 
					className="popup__field form__input" 
					placeholder="Ссылка на картинку"
					required
					/>
				<span className="avatar-input-error form__error-message"></span>
			</PopupWithForm>

			<PopupWithForm 
				name="delete-card" 
				title="Вы уверены?">
				<p className="popup__title">Вы уверены?</p>
			</PopupWithForm>
			
			<ImagePopup/>

			<template className="card-template card-template_type_default">
					<div className="card">
						<button className="card__trash-icon" type="button" alt="Удалить" ></button>
						<img src='#' alt='#' className="card__image"/>
						<div className="card__header">
							<h2 className="card__title"></h2>
							<div className="card__like-wrapper">
								<button className="card__like" type="button" alt="Нравится" ></button>
								<p className="card__likes">0</p>
							</div>
						</div>
					</div>
			</template>
		</div>
	)
}

export default App;