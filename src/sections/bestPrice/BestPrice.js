import './bestPrice.sass'

import {Good} from './Good'

import sliderFoto1 from '../../img/good-1.webp'
import sliderFoto2 from '../../img/good-2.webp'
import sliderFoto3 from '../../img/good-3.webp'
import sliderFoto4 from '../../img/good-4.webp'
import sliderFoto5 from '../../img/good-5.webp'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.scss";

import SwiperCore, { Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs } from 'swiper';
SwiperCore.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);


function BestPrice() {

	const state = {
		goods: [
			{goodFoto: sliderFoto1, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto2, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto3, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto4, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto5, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto1, goodName: 'Хурма Медовая Восточная', goodPrice: '275'},
			{goodFoto: sliderFoto2, goodName: 'Хурма Медовая Восточная', goodPrice: '275'}
		]
	}

	const params = {
		slidesPerView: 6,
        spaceBetween: 0,
		loop: true,
		speed: 1000,
		roundLengths: true,
		slidesOffsetBefore: 0,
		pagination: {
			el: ".best-price .dots",
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 5
			},
			1200: {
				slidesPerView: 6
			}
		}
	}

	return (
		<section className="best-price">
			<div className="center-box">
				<h1 className="title best-price__title">Лучшая цена</h1>
			</div>
			<div className="best-price__slider slider-best">
				<div className="slider-best__wrapper">
					<Swiper {...params}>
						{
							state.goods.map((item, key) => {
								return(
									<SwiperSlide key={key}>
										<Good foto={item.goodFoto} name={item.goodName} price={item.goodPrice} />
									</SwiperSlide>
								)
							})
						}
					</Swiper>

					<div className="dots"></div>

				</div>
			</div>
		</section>
	)
}

export default BestPrice