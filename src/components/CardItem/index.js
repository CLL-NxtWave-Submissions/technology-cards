import './index.css'

const CardItem = props => {
  const {cardItemData} = props
  const {title, description, imgUrl, className} = cardItemData

  const cardItemStyling = `${className} technology-card-item`

  return (
    <li className={cardItemStyling}>
      <h1 className="technology-card-header">{title}</h1>
      <p className="technology-card-description">{description}</p>
      <img className="technology-card-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
