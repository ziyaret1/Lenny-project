import './featuresCard.scss'

const FeaturedCards = ({fIcon, fText, fParag}) => {
  return (
    <div className='featuredCard-container'>
        <div className="featuresCards">
        <icon className="featuresIcon">
            {fIcon}
        </icon>
        <h1>{fText}</h1>
        <p>{fParag}</p>
    </div>
    </div>
  )
}

export default FeaturedCards