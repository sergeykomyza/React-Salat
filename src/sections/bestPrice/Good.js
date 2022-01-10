



export const Good = (props) => {
	return(
		<div className="good js-item">
			<figure className="good__img">
				<a href="product.html"> 
					<img src={props.foto} alt={props.name} />
				</a>
			</figure>
			<form className="good__info" action="#">
				<a className="good__name elem-title" href="product.html">{props.name}</a>
				<p className="good__weight">1кг</p>
				<p className="good__price">{props.price} руб.</p>
				<div className="good__purchase purchase">
					<div className="purchase__counter counter">
						<button className="counter__minus">-</button>
						<input className="counter__val" type="text" defaultValue="0" />
						<button className="counter__plus">+</button>
					</div>
					<button className="button-green">Беру!</button>
				</div>
			</form>
		</div>
	)
}