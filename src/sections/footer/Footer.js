import './footer.sass'

import { Dev } from './Dev'

import logoFooter from '../../img/Logo-footer.png'
import arrowListItem from '../../img/list-item-arrow.png'

function Footer() {

	const listCatalog = ['Фрукты', 'Овощи и зелень', 'Фермерские продукты', 'Натуральные продукты', 'Приправы и пряности', 'Рыбы и морепродукты']
	const listCatalogItems = listCatalog.map((item, i) =>
		<li className="footer-menu__item" key={i}>
			<img className="footer-menu__icon" src={arrowListItem} alt="arrow" />
			<a className="footer-menu__link" href="/">{item}</a>
		</li>
	)

	const listUseful = ['Готовые наборы', 'Подарочные корзины', 'Фрукты в офис', 'Акции', 'Программы лояльности']
	const listUsefulItems = listUseful.map((item, i) =>
		<li className="footer-menu__item" key={i}>
			<img className="footer-menu__icon" src={arrowListItem} alt="arrow" />
			<a className="footer-menu__link" href="/">{item}</a>
		</li>
	)

	const listInfo = ['О магазине', 'Сотрудничество', 'Доставки и оплата', 'Пользовательское соглашение', 'Политика конфиденциальности', 'Контакты']
	const listInfoItems = listInfo.map((item, i) =>
		<li className="footer-menu__item" key={i}>
			<img className="footer-menu__icon" src={arrowListItem} alt="arrow" />
			<a className="footer-menu__link" href="/">{item}</a>
		</li>
	)

	return (
		<div className="">
			<footer className="footer">
				<figure className="footer__logo"> <img src={logoFooter} alt="logo" />
					<figcaption>Интернет магазин свежих<br />и здоровых продуктов</figcaption>
				</figure>
				<div className="footer__menus">
					<div className="footer__col">
						<h6 className="footer__title">Заказать</h6>
						<div className="footer__info">
							<p>Москва и Московская область</p>
							<p>8 (495) 123-45-67</p>
							<p>Ежедневно с 9:00 до 21:00</p>
							<p>zakaz@salat.ru</p>
						</div>
					</div>
					<div className="footer__col footer-menu">
						<h6 className="footer__title">Каталог</h6>
						<ul className="footer-menu__list">
							{listCatalogItems}
						</ul>
					</div>
					<div className="footer__col footer-menu">
						<h6 className="footer__title">Полезное</h6>
						<ul className="footer-menu__list">
							{listUsefulItems}
						</ul>
					</div>
					<div className="footer__col footer-menu">
						<h6 className="footer__title">Информация</h6>
						<ul className="footer-menu__list">
							{listInfoItems}
						</ul>
					</div>
				</div>
			</footer>
			<Dev />
		</div>
	)
}

export default Footer