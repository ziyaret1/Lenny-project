import './reviewRating.scss'
import ratingCircle from '../../../../assets/images/ratingCircle.png'
import {PiStarFill} from 'react-icons/pi'
import RatingDetails from './RatingDetails'
import ratingResultImg from '../../../../assets/images/ratingResultImg.png'
import ratingResultImg2 from '../../../../assets/images/ratingScoreImg2.png'
import ratingResultImg3 from '../../../../assets/images/ratingScoreImg3.png'
import ratingResultImg45 from '../../../../assets/images/ratingScoreImg45.png'

const ReviewRating = () => {
  return (
    <div className='reviewRating-container'>
         <h3>Product Reviews</h3>
        <div className="ratingScore">
        <div className="ratingScore-left">
        <div className="ratingCircle">
            <img src={ratingCircle} alt="" />
        </div>
        <div className="stars-text">
        <div className="ratingStars">
        <PiStarFill className='ratingStar'/>
        <PiStarFill className='ratingStar'/>
        <PiStarFill className='ratingStar'/>
        <PiStarFill className='ratingStar'/>
        <PiStarFill className='ratingStar'/>
       </div>
       <div className="ratingText">
        <p>from 1,25k reviews</p>
        </div>
        </div>
        </div>
        <div className="ratingScore-right">
            <RatingDetails ratingRes="5.0" ratingImg={ratingResultImg} ratingScore="2823"/>
            <RatingDetails ratingRes="4.0" ratingImg={ratingResultImg2} ratingScore="38"/>
            <RatingDetails ratingRes="3.0" ratingImg={ratingResultImg3} ratingScore="4"/>
            <RatingDetails ratingRes="2.0" ratingImg={ratingResultImg45} ratingScore="0"/>
            <RatingDetails ratingRes="1.0" ratingImg={ratingResultImg45} ratingScore="0"/>
        </div>
        </div>
    </div>
  )
}

export default ReviewRating