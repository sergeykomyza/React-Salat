

import './info.sass'

import banner from '../../img/banner.webp'
import vegetablesImg from '../../img/vegetables-2.webp'

function Info() {

	const listDatas = ['Купить фрукты','Купить овощи','Купить фрукты и овощи оптом', 'Заказать фрукты в офис', 'Купить фрукты и овощи поштучно']
	const listItems = listDatas.map((item, i) =>
		<li key={i}><a href="/">{item}</a></li>
	)

	const listDatas2 = ['У нас самый свежий товар','У нас низкие цены', 'У нас самые выгодные условия на покупку овощей и фруктов оптом']
	const listItems2 = listDatas2.map((item, i) =>
		<li key={i}><a href="/">{item}</a></li>
	)

	return (
		<section className="info">
			<img className="info__vegetables" src={vegetablesImg} alt="vegetables" />
			<div className="center-box">
				<h3 className="title info__title">Интернет магазин свежих и здоровых продуктов</h3>
			</div><img className="info__img" src={banner} alt="banner" />
			<div className="info__content content-info">
				<div className="content-info__col">
					<div className="content-info__title elem-title">Какой то заголовок</div>
					<p>Мы - команда, имеющая огромный опыт в плодово-овощном бизнесе. С 2002 г. мы занимаемся импортом ягод, фруктов, овощей, грибов, трав, орехов из Европы, Африки, Азии с целью дальнейшего снабжения продовольственных магазинов и предприятий общепита. На данном этапе у нас есть собственная логистическая цепочка, включающая специализированный транспорт, плодово-овощное хранилище и надежных, проверенных временем, поставщиков качественной продукции. В нашем магазине можно:</p>
					<ul>
						{listItems}
					</ul>
				</div>
				<div className="content-info__col">
					<div className="content-info__title elem-title">Какой то заголовок</div>
					<p>Мы осуществляем доставку овощей собственной курьерской службой. Почему стоит покупать именно у нас:</p>
					<ul>
					{listItems2}
					</ul>
				</div>
				<div className="content-info__col">
					<div className="content-info__title elem-title">Какой то заголовок</div>
					<p>Цены указаны за 1 кг или упаковку, с учетом НДС. В нашем магазине не обязательно регистрироваться. Если у вас возникают трудности при формировании заказа - вы можете оформить покупку овощей и фруктов по телефону. Мы принимаем наличные. Для юр лиц мы выставляем счет на оплату. Условия для оптовиков представлены здесь.</p>
				</div>
			</div>
		</section>
	)
}

export default Info