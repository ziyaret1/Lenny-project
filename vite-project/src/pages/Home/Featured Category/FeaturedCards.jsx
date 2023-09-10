import './featuresCard.scss'

// eslint-disable-next-line react/prop-types
const FeaturedCards = ({fIcon, fText}) => {


  return (
    <div className='featuredCard-container'>
        <div className="featuresCards">
        <img src={`${import.meta.env.VITE_UPLOAD_IMAGE}${fIcon}`} alt="" />
        <h1>{fText}</h1>
        <p>8,9k products</p>
    </div>
    </div>
  )
}

export default FeaturedCards