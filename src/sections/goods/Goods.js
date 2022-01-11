
import './goods.sass'

import good1 from '../../img/mini-good-1.webp'
import good2 from '../../img/mini-good-2.webp'
import good3 from '../../img/mini-good-3.webp'
import good4 from '../../img/mini-good-4.webp'
import good5 from '../../img/mini-good-5.webp'
import good6 from '../../img/mini-good-6.webp'
import good7 from '../../img/mini-good-7.webp'
import good8 from '../../img/mini-good-8.webp'
import good9 from '../../img/mini-good-9.webp'
import vegetablesImg from '../../img/vegetables-2.webp'

import { MiniGood } from './MiniGood'

function Goods(){

	const state = {
		hits: [
			{goodFoto: good1, goodName: 'Бананы Египет', goodPrice: '129'},
			{goodFoto: good2, goodName: 'Апельсины', goodPrice: '129'},
			{goodFoto: good3, goodName: 'Мандарины Марокко', goodPrice: '129'}
		],
		newsGoods: [
			{goodFoto: good1, goodName: 'Ананас', goodPrice: '129'},
			{goodFoto: good2, goodName: 'Кокос Куба', goodPrice: '129'},
			{goodFoto: good3, goodName: 'Персик Крым', goodPrice: '129'}
		],
		sales: [
			{goodFoto: good1, goodName: 'Коробка фруктов', goodPrice: '129'},
			{goodFoto: good2, goodName: 'Коробка овощей', goodPrice: '129'},
			{goodFoto: good3, goodName: 'Коробка ягод', goodPrice: '129'}
		]
	}

	return(
		<section className="goods">
			<div className="goods__col">
				<div className="title goods__title">Хит продаж</div>
				<div className="goods__items">
					{
						state.hits.map((item, i) => {
							return(
								<MiniGood foto={item.goodFoto} name={item.goodName} price={item.goodPrice} key={i} />
							)
						})
					}
				</div>
			</div>
			<div className="goods__col">
				<div className="title goods__title">Новые поступления</div>
				<div className="goods__items">
					{
						state.newsGoods.map((item, i) => {
							return(
								<MiniGood foto={item.goodFoto} name={item.goodName} price={item.goodPrice} key={i} />
							)
						})
					}
				</div>
			</div>
			<div className="goods__col">
				<div className="title goods__title">Акции</div>
				<div className="goods__items">
					{
						state.newsGoods.map((item, i) => {
							return(
								<MiniGood foto={item.goodFoto} name={item.goodName} price={item.goodPrice} key={i} />
							)
						})
					}
				</div>
			</div>
			<img className="goods__vegetables" src={vegetablesImg} alt="vegetables" />
		</section>
	)
}

export default Goods