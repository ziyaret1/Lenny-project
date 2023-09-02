import './articleCard.scss'

const ArticleCard = ({artImage, artDate, artContext, artParagraf}) => {
  return (
    <div className='articleCard-container'>
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

export default ArticleCard