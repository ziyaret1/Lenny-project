import './reviewComment.scss'
import { PiStarFill } from "react-icons/pi";
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
const ReviewComment = ({commentText, userPhoto, userName, likeAmount}) => {
  return (
    <div className='reviewComment-container'>
        <div className="ratingStars">
        <PiStarFill/>
        <PiStarFill/>
        <PiStarFill/>
        <PiStarFill/>
        <PiStarFill/>
        </div>
        <div className="commentContext">
            <h4>{commentText}</h4>
            <p>July 2, 2020 03:29 PM</p>
        </div>
        <div className="user-likeDisslike">
            <div className="userInfos">
              <img src={userPhoto} alt="" /> 
              <p>{userName}</p> 
            </div>
            <div className="like-disslike">
                <button><BiLike className='likeButton'/> {likeAmount}</button>
                <button><BiDislike className='disslikeButton'/></button>
            </div>
        

        </div>
    </div>
  )
}

export default ReviewComment