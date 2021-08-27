import './Cards.css'

const Cards = (props) => {
  return (
    <article className="card">
      <img src={props.img} alt={props.title} />
      <header className="card-header">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </header>
    </article>
  )
}

export default Cards
