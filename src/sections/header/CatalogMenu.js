import React, {useEffect} from 'react'

import icon1 from '../../img/icon_catalog_fruit.svg'
import icon2 from '../../img/icon_catalog_vegetables.svg'
import icon3 from '../../img/icon_catalog_berry.svg'
import icon4 from '../../img/icon_catalog_grocery.svg'
import icon5 from '../../img/icon_catalog_other.svg'

export const CatalogMenu = () => {

	useEffect(() => {
		const menuCatalogItem = document.querySelectorAll('.menu-catalog__item')
		menuCatalogItem.forEach(item => {
			const categoryListName = item.querySelector('.menu-catalog__name')
			const categorySublistName = item.querySelector('.catalog-sublist__name')
			categorySublistName.innerText = categoryListName.innerText // передаем наименование ссылки из меню в подменю сразу при открытии меню
			item.addEventListener('mouseover', function () {
				menuCatalogItem.forEach(elem => {
					elem.classList.remove('active')
				})
				item.classList.add('active')
			})
		})
	});

	const listFruits = ['Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши','Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши','Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши']
	const listFruitsItems = listFruits.map((item, i) => 
		<li className="catalog-sublist__item" key={i}>
			<a className="catalog-sublist__link" href="/">{item}</a>
		</li>
	)

	const listVegetables = ['Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши','Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши','Яблоки','Груши','Сливы','Бананы','Ананасы','Киви','Лимоны','Яблоки','Груши']
	const listVegetablesItems = listVegetables.map((item, i) => 
		<li className="catalog-sublist__item" key={i}>
			<a className="catalog-sublist__link" href="/">{item}</a>
		</li>
	)

	return (
		<nav className='menu-catalog' id="menu-catalog">
			<ul className="menu-catalog__list">
				<li className="menu-catalog__item active">
					<img className="menu-catalog__icon" src={icon1} alt="icon" />
					<span className="menu-catalog__name">Фрукты</span>
					<svg className="menu-catalog__arrow" viewBox="0 0 14 14">
						<polygon className="st0" points="9.2,6.5 5.1,2.4 4.2,3.3 8.2,7.4 4.2,11.5 5.1,12.4 9.2,8.3 10.1,7.4 "></polygon>
					</svg>
					<ul className="menu-catalog__sublist catalog-sublist">
						<li className="catalog-sublist__title"><a className="catalog-sublist__name" href="category.html"></a></li>
						{listFruitsItems}
					</ul>
				</li>
				<li className="menu-catalog__item"><img className="menu-catalog__icon" src={icon2} alt="icon" /><span className="menu-catalog__name">Овощи</span>
					<svg className="menu-catalog__arrow" viewBox="0 0 14 14">
						<polygon className="st0" points="9.2,6.5 5.1,2.4 4.2,3.3 8.2,7.4 4.2,11.5 5.1,12.4 9.2,8.3 10.1,7.4 "></polygon>
					</svg>
					<ul className="menu-catalog__sublist catalog-sublist">
						<li className="catalog-sublist__title"> <a className="catalog-sublist__name" href="/"></a></li>
						{listVegetablesItems}
					</ul>
				</li>
				<li className="menu-catalog__item"><img className="menu-catalog__icon" src={icon3} alt="icon" /><span className="menu-catalog__name">Ягоды</span>
					<svg className="menu-catalog__arrow" viewBox="0 0 14 14">
						<polygon className="st0" points="9.2,6.5 5.1,2.4 4.2,3.3 8.2,7.4 4.2,11.5 5.1,12.4 9.2,8.3 10.1,7.4 "></polygon>
					</svg>
					<ul className="menu-catalog__sublist catalog-sublist">
						<li className="catalog-sublist__title"> <a className="catalog-sublist__name" href="/"></a></li>
						
					</ul>
				</li>
				<li className="menu-catalog__item"><img className="menu-catalog__icon" src={icon4} alt="icon" /><span className="menu-catalog__name">Бакалея</span>
					<svg className="menu-catalog__arrow" viewBox="0 0 14 14">
						<polygon className="st0" points="9.2,6.5 5.1,2.4 4.2,3.3 8.2,7.4 4.2,11.5 5.1,12.4 9.2,8.3 10.1,7.4 "></polygon>
					</svg>
					<ul className="menu-catalog__sublist catalog-sublist">
						<li className="catalog-sublist__title"> <a className="catalog-sublist__name" href="/"></a></li>
						
					</ul>
				</li>
				<li className="menu-catalog__item"><img className="menu-catalog__icon" src={icon5} alt="icon" /><span className="menu-catalog__name">Другое</span>
					<svg className="menu-catalog__arrow" viewBox="0 0 14 14">
						<polygon className="st0" points="9.2,6.5 5.1,2.4 4.2,3.3 8.2,7.4 4.2,11.5 5.1,12.4 9.2,8.3 10.1,7.4 "></polygon>
					</svg>
					<ul className="menu-catalog__sublist catalog-sublist">
						<li className="catalog-sublist__title"> <a className="catalog-sublist__name" href="/"></a></li>
						
					</ul>
				</li>
			</ul>
		</nav>
	)
}