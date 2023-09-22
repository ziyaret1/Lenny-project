import './choicesProduct.scss'
import logitechLogo from '../../../assets/images/logitechMiniLogo.png'
import ChoicesProductCard from './ChoicesProductCard'
import cardProductImage from '../../../assets/images/cardProductImage.png'

const ChoicesProduct = () => {
  return (
    <div className='choicesProduct-container'>
        <div className="productOwner">
            <img src={logitechLogo} alt="" />
            <div className="prodOwner-info">
                <h4>Logitech Indonesia</h4>
                <p>Central Jakarta</p>
            </div>
        </div>
        <div className="productsList">
        <ChoicesProductCard productImage={cardProductImage} productName="Logitech G435 Gaming Headset" productPrise="$280"/>
        <div className="borderBottom"></div>
        <ChoicesProductCard productImage={cardProductImage} productName="Logitech G435 Gaming Headset" productPrise="$280"/>
        <div className="borderBottom"></div>
        <ChoicesProductCard productImage={cardProductImage} productName="Logitech G435 Gaming Headset" productPrise="$280"/>
    </div>
    </div>
  )
}

export default ChoicesProduct