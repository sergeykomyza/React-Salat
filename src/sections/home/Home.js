import React from 'react';

import './home.sass'



import slide1 from '../../img/hero_image_01.webp'
import slide2 from '../../img/hero_image_01.webp'
import animateImg from '../../img/rotating_vegetables.webp'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.scss";

import SwiperCore, { Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs } from 'swiper';
SwiperCore.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);

const slideStyle1 = {
	position: "relative",
	height: "54.063rem",
	background: "url(" + slide1 + ") center center/cover no-repeat"
}
const slideStyle2 = {
	position: "relative",
	height: "54.063rem",
	background: "url(" + slide2 + ") center center/cover no-repeat"
}

function Home() {

	const params = {
		effect: "fade",
		speed: 1000,
		roundLengths: true,
		slidesOffsetBefore: 0,
		pagination: {
			el: ".home .dots",
			clickable: true
		}
	}

	return (

		<section className="home">

			<Swiper {...params} >
				<SwiperSlide style={slideStyle1}>
					<img className="animate-img" src={animateImg} alt="rotating-img" />
					<div className="slider-home__content">
						<p className="slider-home__text slider-home__text--1">Всегда только</p>
						<p className="slider-home__text slider-home__text--2">свежие</p>
						<p className="slider-home__text slider-home__text--3">фрукты, овощи <br /> и ягоды </p>
						<p className="slider-home__text slider-home__text--4">на вашем  столе</p>
						<button className="button-red">заказать</button>
					</div>
				</SwiperSlide>
				<SwiperSlide style={slideStyle2}></SwiperSlide>
			</Swiper>

			<div className="dots"></div>

			<div className="scrolling">
				<svg viewBox="0 0 20 60">
					<g>
						<path className="st0" d="M10,11.5c-0.9,0-1.7-0.8-1.7-1.7V6.6c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7v3.2
			C11.7,10.7,10.9,11.5,10,11.5z"/>
						<path className="st0" d="M11.7,0H8.3C3.9,0,0.2,3.6,0.2,8.1v11.5c0,4.5,3.6,8.1,8.1,8.1h3.3c4.5,0,8.1-3.6,8.1-8.1V8.1
			C19.8,3.6,16.1,0,11.7,0z M18.3,19.3c0,3.7-3,6.7-6.7,6.7H8.4c-3.7,0-6.7-3-6.7-6.7V8.4c0-3.7,3-6.7,6.7-6.7h3.2
			c3.7,0,6.7,3,6.7,6.7V19.3z"/>
						<polygon className="animate-arrow" points="10,40 18.7,31.3 17.5,30 10,37.5 2.5,30 1.3,31.3 	" />
					</g>
				</svg>
			</div>

		</section>

	);
}

export default Home;
