import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
	/** Стейт-переменные юзера и карточек для данных с сервера */
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);
	
	/** Вызываем эффект с результатами промиса с сервера */
	useEffect(() => {
		Promise.all([api.getUserDataApi(), api.getInitialCardsApi()])
		.then(([userData, cardsData]) => {
			setUserName(userData.name);
			setUserDescription(userData.about);
			setUserAvatar(userData.avatar);
			setCards(cardsData);
		})
		.catch(err => console.log(err))
	}, []);

	return(
		<div className="main">
			<section className="profile">
				<div className="profile__container">
					<div className="profile__avatar-container">
						<div
							style={{ backgroundImage: `url(${userAvatar})` }} 
							className="profile__avatar" 
							onClick={onEditAvatar}
							>
						</div>
					</div>
					<div className="profile__info">
						<h1 className="profile__info-title">{userName}</h1>
						<p className="profile__info-subtitle">{userDescription}</p>
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
						card={card}
						name={card.name}
						link={card.link}
						likes={card.likes}
						onCardClick={onCardClick}
					/>
				))}
			</section>
		</div>
	)
}

export default Main;