import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);
	
	useEffect(() => {
		Promise.all([api.getUserDataApi(), api.getInitialCardsApi()])
		.then(([userData, cardsData]) => {
			setUserName(userData.name);
			setUserDescription(userData.about);
			setUserAvatar(userData.avatar);
			setCards(cardsData);
			console.log(cardsData)
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

			<section className="cards">
				{cards.map(card => (
					<div className="card">
					<button className="card__trash-icon" type="button" alt="Удалить" ></button>
					<img src={card.link} alt='#' className="card__image"/>
					<div className="card__header">
						<h2 className="card__title">{card.name}</h2>
						<div className="card__like-wrapper">
							<button className="card__like" type="button" alt="Нравится"></button>
							<p className="card__likes">{card.likes.length}</p>
						</div>
					</div>
				</div>
				))}
			</section>
			
		</div>
	)
}

export default Main;