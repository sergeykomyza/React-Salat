import React, {useEffect} from 'react'

import './contacts.sass'

import Info from '../../sections/info/Info'
import Advantages from '../../sections/advantages/Advantages'
import Subscription from '../../sections/subscription/Subscription'

import {YMaps, Map, Placemark} from 'react-yandex-maps'

function Contacts() {

	const [showMap, setShowMap] = React.useState(false)
	React.useEffect(() => {
		const timeOut = setTimeout(() => setShowMap(true), 3000)
		return () => clearTimeout(timeOut)
	}, [])

	return (
		<div className="contacts-page overflow-hidden">
			<section className="contacts">
				<div className="contacts__map">
					<div id="map">
					{ showMap &&
						<YMaps>
							<Map defaultState={{ center: [55.851449, 37.492635], zoom: 13 }} width="100%" height="100%" >
								<Placemark geometry={[55.851449, 37.492635]}/>
							</Map>
						</YMaps>
					}
					</div>
					<button className="contacts__button button-green">Проложить маршрут</button>
				</div>
				<div className="contacts__info">
					<h1 className="contacts__title title">Контакты</h1>
					<div className="contacts__item"><b className="contacts__tagtitle">Служба поддержки клиентов</b><a className="contacts__val" href="tel:+71111111111">+495 123-45-67</a></div>
					<div className="contacts__item"><b className="contacts__tagtitle">Почта</b><a className="contacts__val" href="mailto:hello@salat.ru">hello@salat.ru</a>
						<p className="contacts__clarification">Написать отзыв, пожелание, задать вопрос</p><a className="contacts__val" href="mailto:rabota@salat.ru">rabota@salat.ru</a>
						<p className="contacts__clarification">Отдел по работе с персоналом</p><a className="contacts__val" href="mailto:smi@salat.ru">smi@salat.ru</a>
						<p className="contacts__clarification">Отдел по работе с общественностью</p>
					</div>
					<div className="contacts__item"><b className="contacts__tagtitle">Свяжитесь с нами в соцсетях</b>
						<div className="contacts__socials socials"><a className="socials__link" href="/">
							<svg viewBox="0 0 40 40">
								<circle className="st0" cx="20" cy="20" r="17.5"></circle>
								<path className="st1" d="M17.8,28.7h3.5v-8.8h2.4L24,17h-2.7c0,0,0-1.1,0-1.7c0-0.7,0.1-1,0.8-1c0.5,0,1.9,0,1.9,0v-3									c0,0-2,0-2.4,0c-2.6,0-3.8,1.1-3.8,3.3c0,1.9,0,2.3,0,2.3H16v3h1.8V28.7z"></path>
							</svg></a><a className="socials__link" href="/">
								<svg viewBox="0 0 40 40">
									<circle className="st0" cx="20" cy="20" r="17.5"></circle>
									<g>
										<path className="st1" d="M20,13c2.3,0,2.6,0,3.5,0c0.8,0,1.3,0.2,1.6,0.3c0.4,0.2,0.7,0.3,1,0.6c0.3,0.3,0.5,0.6,0.6,1										c0.1,0.3,0.3,0.8,0.3,1.6c0,0.9,0,1.2,0,3.5c0,2.3,0,2.6,0,3.5c0,0.8-0.2,1.3-0.3,1.6c-0.2,0.4-0.3,0.7-0.6,1										c-0.3,0.3-0.6,0.5-1,0.6c-0.3,0.1-0.8,0.3-1.6,0.3c-0.9,0-1.2,0-3.5,0c-2.3,0-2.6,0-3.5,0c-0.8,0-1.3-0.2-1.6-0.3										c-0.4-0.2-0.7-0.3-1-0.6c-0.3-0.3-0.5-0.6-0.6-1c-0.1-0.3-0.3-0.8-0.3-1.6c0-0.9,0-1.2,0-3.5c0-2.3,0-2.6,0-3.5										c0-0.8,0.2-1.3,0.3-1.6c0.2-0.4,0.3-0.7,0.6-1c0.3-0.3,0.6-0.5,1-0.6c0.3-0.1,0.8-0.3,1.6-0.3C17.4,13,17.7,13,20,13 M20,11.5										c-2.3,0-2.6,0-3.5,0.1c-0.9,0-1.5,0.2-2.1,0.4c-0.6,0.2-1,0.5-1.5,1c-0.5,0.5-0.8,1-1,1.5c-0.2,0.5-0.4,1.2-0.4,2.1										c0,0.9-0.1,1.2-0.1,3.5s0,2.6,0.1,3.5c0,0.9,0.2,1.5,0.4,2.1c0.2,0.6,0.5,1,1,1.5c0.5,0.5,1,0.8,1.5,1c0.5,0.2,1.2,0.4,2.1,0.4										c0.9,0,1.2,0.1,3.5,0.1c2.3,0,2.6,0,3.5-0.1c0.9,0,1.5-0.2,2.1-0.4c0.6-0.2,1-0.5,1.5-1c0.5-0.5,0.8-1,1-1.5										c0.2-0.5,0.4-1.2,0.4-2.1c0-0.9,0.1-1.2,0.1-3.5s0-2.6-0.1-3.5c0-0.9-0.2-1.5-0.4-2.1c-0.2-0.6-0.5-1-1-1.5c-0.5-0.5-1-0.8-1.5-1										c-0.5-0.2-1.2-0.4-2.1-0.4C22.6,11.5,22.3,11.5,20,11.5"></path>
										<path className="st1" d="M20,15.6c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4S22.4,15.6,20,15.6 M20,22.8										c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8C22.8,21.6,21.6,22.8,20,22.8"></path>
										<path className="st1" d="M25.6,15.4c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1C25.1,14.4,25.6,14.9,25.6,15.4"></path>
									</g>
								</svg></a><a className="socials__link" href="/">
								<svg viewBox="0 0 40 40">
									<circle className="st0" cx="20" cy="20" r="17.5"></circle>
									<path className="st1" d="M28.8,25.1c-0.8-1.8-2.5-3.3-3.5-4.2c-0.2-0.2-0.3-0.5-0.1-0.8c1.2-1.4,2.2-3.1,3.3-5.1									c0.2-0.4-0.1-0.8-0.5-0.8h-3c-1.3,2.3-2.7,4.6-3.7,5.4c-0.3,0.2-0.7,0-0.7-0.3V15v-0.4c0-0.2-0.2-0.4-0.4-0.4h-3.6									c-0.4,0-0.6,0.4-0.3,0.7c0,0,0,0,0.1,0.1c0.5,0.5,0.7,1.2,0.7,1.9v3.3c0,0.3-0.3,0.5-0.6,0.4c-1.7-0.8-2.9-3.6-3.8-6.2									c0-0.1-0.1-0.2-0.3-0.2H9.6c-0.2,0-0.4,0.2-0.4,0.5c0.1,1.1,0.4,2.1,0.8,3.2c1.3,3.4,4.1,6.8,7.7,7.8c0.6,0.2,3.1,0.8,3.1-0.4v-2.3									l0,0c0.6-1.5,2.6,0.9,4.5,3h3C28.7,25.9,29,25.4,28.8,25.1z"></path>
								</svg></a></div>
					</div>
					<div className="contacts__item"><b className="contacts__tagtitle">Юридическая информация</b>
						<p className="contacts__val">ОГРН 1166952059284<br />ИНН 6910023032<br />КПП 501001001<br />Юр. адрес: 141980, Московская обл., г. Дубна, ул. Строителей, дом № 12, помещение I/2.</p>
					</div>
				</div>
			</section>
			<Info />
			<Advantages />
			<Subscription />
		</div>
	);
}

export default Contacts;