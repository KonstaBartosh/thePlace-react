import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const currentUser = useContext(CurrentUserContext); //объект текущего юзера

	/** Стейт-переменные юзера и карточек для данных с сервера */
	// const [userName, setUserName] = useState('');
	// const [userDescription, setUserDescription] = useState('');
	// const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	/** Вызываем эффект с результатами промиса с сервера */
	useEffect(() => {
		Promise.all([api.getUserDataApi(), api.getInitialCardsApi()])
			.then(([userData, cardsData]) => {
				// setUserName(userData.name);
				// setUserDescription(userData.about);
				// setUserAvatar(userData.avatar);
				setCards(cardsData);
			})
			.catch(err => console.log(err))
	}, []);

	return (
		<main className="main">
			<section className="profile">
				<div className="profile__container">
					<div className="profile__avatar-container">
						<div
							style={{ backgroundImage: `url(${currentUser.avatar})` }}
							className="profile__avatar"
							onClick={onEditAvatar}
						>
						</div>
					</div>
					<div className="profile__info">
						<h1 className="profile__info-title">{currentUser.name}</h1>
						<p className="profile__info-subtitle">{currentUser.about}</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
							onClick={onEditProfile}
						></button>
					</div>
				</div>
				<button
					className="profile__button"
					aria-label="Добавить"
					type="button"
					onClick={onAddPlace}
				></button>
			</section>

			{/* <--- Здесь карточки ---> */}
			<section className="cards">
				{cards.map(card => (
					<Card
						key={card._id}
						card={card}
						name={card.name}
						link={card.link}
						likes={card.likes}
						onCardClick={onCardClick}
					/>
				))}
			</section>
		</main>
	)
}

export default Main;