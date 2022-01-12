import { NavLink } from "react-router-dom";

const Menu = ()=> {
	return(
		<ul className="header__menu menu">
			<li className="menu__item">
				<a className="menu__link" href="sales.html">
					Акции
				</a>
			</li>
			<li className="menu__item">
				<NavLink to="/about" className="menu__link">О компании</NavLink>
			</li>
			<li className="menu__item">
				<a className="menu__link" href="payment.html">
					Оплата и доставка
				</a>
			</li>
			<li className="menu__item">
				<NavLink to="/news" className="menu__link">Новости</NavLink>
			</li>
			<li className="menu__item">
				<a className="menu__link" href="contacts.html">
					Контакты
				</a>
			</li>
		</ul>
	)
}

export default Menu