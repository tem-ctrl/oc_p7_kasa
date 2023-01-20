// House card in Gallery

function Card(props) {
  return (
    <article className="card">
      <img className="card__img" src={props.image} alt={props.title} />
      <h2 className="h2 card__title white">{props.title}</h2>
    </article>
  )
}

export default Card
