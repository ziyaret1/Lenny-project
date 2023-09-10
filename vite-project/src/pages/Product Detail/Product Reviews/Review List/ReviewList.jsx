import ReviewComment from './ReviewComment'
import './reviewList.scss'
import userPhoto1 from '../../../../assets/images/profilePhoto.png'
import {PiCaretRightBold} from 'react-icons/pi'


const ReviewList = () => {
  return (
    <div className='reviewList-container'>
         <div className="reviewList-title">
          <h3>Review List</h3>
        </div>
        <div className="listFilter">
            <span>All Reviews</span>
            <span>With Photo & Video</span>
            <span>With Description</span>
        </div>
        <div className="reviewComments">
            <ReviewComment commentText="This is amazing product I have" userPhoto={userPhoto1} userName="Darlene Robertson" likeAmount="35"/>
            <div className="borderBottom"></div>
            <ReviewComment commentText="This is amazing product I have" userPhoto={userPhoto1} userName="Darlene Robertson"/>
            <div className="borderBottom"></div>
            <ReviewComment commentText="This is amazing product I have" userPhoto={userPhoto1} userName="Darlene Robertson"/>
            <div className="borderBottom"></div>
            <ReviewComment commentText="This is amazing product I have" userPhoto={userPhoto1} userName="Darlene Robertson"/>
        </div>
        <div className="reviewList-pagination">
            <p>1</p>
            <p>2</p>
            <p>...</p>
            <p>19</p>
            <PiCaretRightBold className='rightArrow'/>
        </div>
    </div>
    
  )
}

export default ReviewList