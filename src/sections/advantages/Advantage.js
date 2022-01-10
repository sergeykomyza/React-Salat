
export const Advantage = (props) => {
	return (
		<article className="news__item new">
			<figure className="new__img">
				<img src={props.foto} alt={props.name} />
			</figure>
			<div className="new__info">
				<h6 className="new__title elem-title">{props.name}</h6>
				<p className="new__text">{props.text}</p>
			</div>
		</article>
	)
}