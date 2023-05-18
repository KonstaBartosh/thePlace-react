import Card from "./Card";

function AddPlacePopup({cards, onCardClick, onCardLike, onCardDelete}) {
	return (
		<section className="cards">
			{cards.map(card => (
				<Card
					key={card._id}
					card={card}
					name={card.name}
					link={card.link}
					likes={card.likes}
					onCardClick={onCardClick}
					onCardLike={onCardLike}
					onCardDelete={onCardDelete}
				/>
			))}
		</section>
	)
}

export default AddPlacePopup;