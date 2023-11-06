import "./checkoutSummary.scss";
import React from "react";
import promoIcon from "../../../assets/icons/promo.png";
import { RxChevronRight } from "react-icons/rx";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const { checkedProducts } = useSelector((state) => state.shopCard);

  let totalCheckedPrise =
    checkedProducts.length > 0
      ? checkedProducts.reduce((total, item) => total + item.productPrice, 0)
      : "0";

  //! Discount
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const discount = 0.1; // 10% discount
  const discountedPrice = discountApplied
    ? (totalCheckedPrise * (1 - discount)).toFixed(2)
    : totalCheckedPrise;
  const applyDiscount = () => {
    setDiscountApplied(true);
  };

  return (
    <div className="checkoutSummary-container">
      <div className="checkoutSum-title">
        <h3>Product Summary</h3>
      </div>
      {checkedProducts.length <= 0 && (
        <div className="productSelected">
          <p>No product selected</p>
          <p></p>
        </div>
      )}
      {checkedProducts.length > 0 &&
        checkedProducts.map(({ productName, productId, productPrice }) => {
          return (
            <div key={productId} className="productSelected">
              <p>{productName}</p>
              <p>${productPrice}</p>
            </div>
          );
        })}

      <div className="borderBottom"></div>
      <div className="prise-taxes">
        <div className="totalPrise">
          <p>Total prise</p>
          <span>${totalCheckedPrise}</span>
        </div>
        <div className="shippingDiscount">
          <p>Total prise (Shipping Discount)</p>
          <span>{discountApplied ? "$" + discountedPrice : "-$0"}</span>
        </div>
        <div className="tax-fee">
          <p>Tax & Fee</p>
          <span>$0</span>
        </div>
      </div>
      <div className="borderBottom"></div>
      <div className="finalTotalPrise">
        <h3>Total Prise</h3>
        <h3>
          $
          {discountedPrice && checkedProducts.length > 0
            ? discountedPrice
            : totalCheckedPrise}
        </h3>
      </div>
      <div className="usePromo-cont">
        <div className="promoIcon-title">
          <img src={promoIcon} alt="" />
          <div className="promoText" onClick={applyDiscount}>
            <h4>Use a Promo</h4>
            <p>Choose Product to use promo</p>
          </div>
        </div>
        <RxChevronRight className="promoRightArrow" />
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CheckoutSummary;
