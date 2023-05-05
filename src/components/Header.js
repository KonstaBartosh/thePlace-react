import logo from '../images/logo.png';

function Header() {
	return(
		<div className="header header_line">
			<img src={logo} alt="Логотип" className="header__logo"/>
		</div>
	)
}

export default Header;