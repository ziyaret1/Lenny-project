import './checkoutSummary.scss'
import promoIcon from '../../../assets/icons/promo.png'
import {RxChevronRight} from 'react-icons/rx'

const CheckoutSummary = () => {
  return (
    <div className='checkoutSummary-container'>
        <div className="checkoutSum-title">
            <h3>Product Summary</h3>
        </div>
        <div className="productSelected">
          <p>No product selected</p>
           <p>$280</p>
        </div>
        <div className="borderBottom"></div>
        <div className="prise-taxes">
        <div className="totalPrise">
          <p>Total prise</p>
           <span>$400</span>
        </div>
        <div className="shippingDiscount">
          <p>Total prise (Shipping Discount)</p>
           <span>-$40</span>
        </div>
        <div className="tax-fee">
          <p>Tax & Fee</p>
           <span>$10</span>
        </div>
        </div>
        <div className="borderBottom"></div>
        <div className="finalTotalPrise">
          <h3>Total Prise</h3>
          <h3>$430</h3>
        </div>
        <div className="usePromo-cont">
          <div className="promoIcon-title">
            <img src={promoIcon} alt="" />
          <div className="promoText">
            <h4>Use a Promo</h4>
            <p>Choose Product to use promo</p>
          </div>
          </div>
          <RxChevronRight className='promoRightArrow'/>
        </div>
        <button className='checkout-button'>Checkout</button>
    </div>
  )
}

export default CheckoutSummary