
import './advantages.sass'

import { Advantage } from './Advantage'

import img1 from '../../img/advantage-1.webp'
import img2 from '../../img/advantage-2.webp'
import img3 from '../../img/advantage-3.webp'
import img4 from '../../img/advantage-4.webp'

import vegetablesImg from '../../img/vegetables-3.webp'
import logo from '../../img/circle-logo.png'
import decor from '../../img/decor-2.webp'

function Advantages() {

	const state = {
		advantages: [
			{advantageFoto: img1, advantageName: 'Ручной сбор урожая', advantageText: 'Собираем только самые свежие и спелые фрукты и овощи. Гарантируем, что в вашем заказе не будет ни одной не свежей ягоды, фрукта или овоща.'},
			{advantageFoto: img2, advantageName: 'Удобная доставка', advantageText: 'Курьер приедет к вам в удобное время и место.'},
			{advantageFoto: img3, advantageName: 'Бережное хранение', advantageText: 'Аккуратно упаковываем нежные ягоды и фрукты. Гарантируем, что ни одна ягодка не помнется'},
			{advantageFoto: img4, advantageName: 'Нет минимального заказа', advantageText: 'Мы не ограничиваем вас суммой заказа. Привезем столько, сколько вы хотите - хоть маленькую корзинку, хоть ящик.'}
		]
	}

	return (
		<section className="advantages">
			<img className="advantages__vegetables" src={vegetablesImg} alt="vegetables" />
			<div className="center-box">
				<h4 className="title advantages__title">Почему Салат?</h4>
			</div>
			<div className="advantages__items">
				{
					state.advantages.map((item, i) => {
						return(
							<Advantage foto={item.advantageFoto} name={item.advantageName} text={item.advantageText} key={i} />
						)
					})
				}
			</div>
			<div className="center-box">
				<button className="button-red advantages__more">заказать</button>
			</div>
			<img className="advantages__decor decor" src={decor} alt="decor" />
			<img className="mini-logo" src={logo} alt="mini-logo" />
		</section>
	)
}

export default Advantages