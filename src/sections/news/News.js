import './news.sass'

import {New} from './New'

import newFoto1 from '../../img/new-1.webp'
import newFoto2 from '../../img/new-2.webp'
import newFoto3 from '../../img/new-3.webp'
import newFoto4 from '../../img/new-4.webp'
import miniLogo from '../../img/circle-logo.png'
import imgVegetables from '../../img/vegetables.webp'


function News(){

	const state = {
		news: [
			{newFoto: newFoto1, newTitle: 'Заголовок статьи', newText: 'Небольшой текст о самой статье для привлечения внимания'},
			{newFoto: newFoto2, newTitle: 'Заголовок статьи', newText: 'Небольшой текст о самой статье для привлечения внимания'},
			{newFoto: newFoto3, newTitle: 'Заголовок статьи', newText: 'Небольшой текст о самой статье для привлечения внимания'},
			{newFoto: newFoto4, newTitle: 'Заголовок статьи', newText: 'Небольшой текст о самой статье для привлечения внимания'}
		]
	}

	return(
		<section className="news">
			<img className='news__vegetables' src={imgVegetables} alt="vegetables" />
			<div className="center-box">
				<h1 className="title news__title">Свежие новости</h1>
			</div>
			<div className="news__items">
				{
					state.news.map((item, i) => {
						return(
							<New foto={item.newFoto} title={item.newTitle} text={item.newText} key={i} />
						)
					})
				}
			</div>
			<div className="center-box">
				<a className="button-red news__more" href="/">все статьи</a>
			</div>
			<img className='mini-logo' src={miniLogo} alt="logo" />
		</section>
	)
}

export default News