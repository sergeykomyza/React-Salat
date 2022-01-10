import React, {useEffect} from 'react'

import './header.sass'

import logo from '../../img/logo.png'

import { NavLink } from "react-router-dom";

import Menu from './Menu'

function Header() {

	useEffect(() => {
		const header = document.querySelector('.header')
		window.addEventListener('scroll', function () {
			if (window.scrollY > 0) {
				header.classList.add('active')
			} else {
				header.classList.remove('active')
			}
		})
	})

	return (
		<header className="header">
			
			<button className="header__button" id="open-catalog">
				<svg viewBox="0 0 30 30">
					<g>
						<path
							className="st0"
							d="M27,8.2H3c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5H27c0.8,0,1.5,0.7,1.5,1.5v0				C28.5,7.5,27.8,8.2,27,8.2z"
						></path>
						<path
							className="st0"
							d="M11.4,15.8H3c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h8.3c0.8,0,1.5,0.7,1.5,1.5v0				C12.9,15.1,12.2,15.8,11.4,15.8z"
						></path>
						<path
							className="st0"
							d="M12.8,23.4H3c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h9.7c0.8,0,1.5,0.7,1.5,1.5v0				C14.3,22.7,13.6,23.4,12.8,23.4z"
						></path>
						<g>
							<path
								className="st0"
								d="M26.2,20.5l1.8,1.8c0.6,0.6,0.6,1.5,0,2.1l0,0c-0.6,0.6-1.5,0.6-2.1,0l-1.8-1.8c-0.6-0.6-0.6-1.5,0-2.1l0,0					C24.7,19.9,25.6,19.9,26.2,20.5z"
							></path>
							<path
								className="st0"
								d="M21.1,10.8c-3.5,0-6.3,2.8-6.3,6.3c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3C27.4,13.6,24.6,10.8,21.1,10.8z					M21.1,20.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3S22.9,20.3,21.1,20.3z"
							></path>
						</g>
					</g>
				</svg>
				каталог
			</button>

			<Menu />

			<NavLink to="/" className="header__logo">
				<img src={logo} alt="logo" />
			</NavLink>

			<a className="header__phone" href="tel:+71111111111">
				(495) 123 45 67
			</a>

			<a className="header__mail" href="mailto:hello@salat.ru">
				hello@salat.ru
			</a>

			<div className="header__search search">

				<input
					className="search__input"
					type="search"
					placeholder="Искать"
				/>

				<button className="search__btn">
					<svg viewBox="0 0 30 30">
						<path
							className="st0"
							d="M13.5,7.1c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7C20.2,10.1,17.2,7.1,13.5,7.1z				M13.5,19c-2.9,0-5.2-2.3-5.2-5.2s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S16.4,19,13.5,19z"
						></path>
						<rect
							className="st0"
							x="18.8"
							y="17.2"
							transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.364 19.8584)"
							width="1.9"
							height="5.6"
						></rect>
					</svg>
				</button>

			</div>

			<a className="header__cart cart" href="basket.html">
				<div className="cart__num">3</div>
				<svg viewBox="0 0 30 30">
					<g>
						<g>
							<g>
								<path
									className="st0"
									d="M20.2,6.8c-0.3-0.8-1-1.3-1.8-1.3H11c-0.8,0-1.6,0.5-1.8,1.3l-1.3,4h1.8l1.1-3.4c0-0.1,0.1-0.2,0.3-0.2h7.3						c0.1,0,0.2,0.1,0.3,0.2l1.1,3.4h1.8L20.2,6.8z"
								></path>
								<path
									className="st0"
									d="M23.8,12.1H5.5c-0.3,0-0.6,0.2-0.6,0.6v2.8c0,0.3,0.2,0.6,0.6,0.6h1l1.1,7.4c0.1,0.5,0.5,0.9,1.1,0.9h12						c0.5,0,1-0.4,1.1-0.9l1.1-7.4h1c0.3,0,0.6-0.2,0.6-0.6v-2.8C24.4,12.4,24.1,12.1,23.8,12.1z M11.6,21.3c0,0.5-0.4,0.8-0.8,0.8						s-0.8-0.4-0.8-0.8v-3.6c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8V21.3z M15.5,21.3c0,0.5-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8v-3.6						c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8V21.3z M19.4,21.3c0,0.5-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8v-3.6c0-0.5,0.4-0.8,0.8-0.8						s0.8,0.4,0.8,0.8V21.3z"
								></path>
							</g>
						</g>
					</g>
				</svg>
			</a>

		</header>
	);
}

export default Header;
