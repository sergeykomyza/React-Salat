import './subscription.sass'

function Subscription() {
	return (
		<section className="subscription">
			<div className="subscription__title">
				<h5>Подписаться<br />на новости</h5>
			</div>
			<form className="subscription__form" action="#">
				<input className="subscription__input" type="text" placeholder="Email" />
				<button className="subscription__button button-red">подписаться</button>
			</form>
		</section>
	)
}

export default Subscription