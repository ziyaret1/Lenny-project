import './ratingDetails.scss'
import {PiStarFill} from 'react-icons/pi'


// eslint-disable-next-line react/prop-types
const RatingDetails = ({ratingRes, ratingImg, ratingScore}) => {
  return (
    <div className='ratingDetails-container'>
        <div className="ratingAmount">
            <p>{ratingRes} </p>
        <PiStarFill className='star'/>
        </div>
        <div className="ratingImg">
 <img src={ratingImg} alt="" />
        </div>
       <div className="ratingScores">
         <p>{ratingScore}</p>
       </div>
       
    </div>
  )
}

export default RatingDetails