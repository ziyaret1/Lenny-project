import './productCard.scss'
import {PiHeart} from 'react-icons/pi'

const ProductCard = ({prodImage, prodName, prodAmount, prodOwner, prodStar, prodPopularity, dotIcon, prodSold}) => {
  return (
    <div className='productCard-container'>
        <div className="popProdImage">
            <img src={prodImage} alt="" style={{width:180, height:180}} />
            <PiHeart className='heartIcon'/>
        </div>
        <div className="popProdContext">
        <div className="prodName-owner">
        <div className="popProdName">
            <h2 className='prodName'>{prodName}</h2>
            {
                prodAmount ? <h2 className='prodAmount'>{prodAmount}</h2> : ""
            }
            
        </div>
        <div className="popProdOwner">
            <p>{prodOwner}</p>
        </div>
        </div>
        <div className="popProdFooter">
            <icon className="prodStar">{prodStar}</icon>
            <p>{prodPopularity}</p>
            <icon className="prodDot">{dotIcon}</icon>
            <p>{prodSold}</p>
        </div>
    </div>
    </div>
  )
}

export default ProductCard