import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick }) {
	const currentUser = useContext(CurrentUserContext);

	function handleClick() {
		onCardClick(card);
	}

	return (
		<div className="card">
			<button className="card__trash-icon" type="button" alt="Удалить" ></button>
			<img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
			<div className="card__header">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__like-wrapper">
					<button className="card__like" type="button" alt="Нравится"></button>
					<p className="card__likes">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;