function Card() {
	return(
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
	)
}

export default Card;