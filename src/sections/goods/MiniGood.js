

export const MiniGood = (props) => {
	return (
		<div className="goods__item mini-good">
			<figure className="mini-good__img"> 
				<a href="product.html"> 
					<img src={props.foto} alt={props.name} />
				</a>
			</figure>
			<form className="mini-good__info" action="#"> <a className="mini-good__name elem-title" href="/">{props.name}</a>
				<p className="mini-good__weight">1кг</p>
				<p className="mini-good__adds"> 
					<span className="mini-good__price">{props.price} руб </span>
					<button className="button-green">Беру!</button>
				</p>
			</form>
		</div>
	)
}