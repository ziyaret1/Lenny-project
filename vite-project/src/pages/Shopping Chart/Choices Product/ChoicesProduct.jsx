import './choicesProduct.scss'
import logitechLogo from '../../../assets/images/logitechMiniLogo.png'
import ChoicesProductCard from './ChoicesProductCard'
import {useSelector} from 'react-redux'

const ChoicesProduct = () => {
  
  const {cart} = useSelector((state) => state.shopCard)
  console.log(cart, 'caaart');


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
        {
            cart.map(({ productId,productName, productPrice, productImg }) => {
              return(
                   <>
                <ChoicesProductCard productId={productId} key={productId} productImage={productImg} productName={productName} productPrise={productPrice}/>
                <div className="borderBottom"></div>
                </>
                )
            })
          }
          
        {/* <ChoicesProductCard productImage={cardProductImage} productName="Logitech G435 Gaming Headset" productPrise="$280"/>
        <div className="borderBottom"></div> */}
    </div>
    </div>
  )
}

export default ChoicesProduct