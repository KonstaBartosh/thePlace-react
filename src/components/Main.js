const name = 'Жак-Ив Кусто';
const about = 'Исследователь океана';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
	return(
		<div className="main">
			<section className="profile">
				<div className="profile__container">
					<div className="profile__avatar-container">
						<div className="profile__avatar" onClick={onEditAvatar}></div>
					</div>
					<div className="profile__info">
						<h1 className="profile__info-title">{name}</h1>
						<p className="profile__info-subtitle">{about}</p>
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
			{/* Здесь карточки */}
			</section>
		</div>
	)
}

export default Main;