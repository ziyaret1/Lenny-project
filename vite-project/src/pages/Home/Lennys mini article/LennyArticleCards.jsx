import './lennyArticleCard.scss'

// eslint-disable-next-line react/prop-types
const LennyArticleCards = ({artImage, artDate, artContext, artParagraf}) => {
  return (
    <div className='lennyArticleCards-container'>
         <div className="lennyArtImg-head">
            <img src={artImage} alt="" />
            <p>{artDate}</p>
        </div>
        <div className="lennyArtContext">
            <h2>{artContext}</h2>
            <p>{artParagraf}</p>
        </div>
    </div>
  )
}

export default LennyArticleCards