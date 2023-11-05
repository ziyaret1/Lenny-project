import "./choicesProduct.scss";
import logitechLogo from "../../../assets/images/logitechMiniLogo.png";
import ChoicesProductCard from "./ChoicesProductCard";
import { useSelector } from "react-redux";
import React from 'react'
 
const ChoicesProduct = () => {
  const { cart } = useSelector((state) => state.shopCard);
  console.log(cart, "shopCartt");


  return ( 
    <div className="choicesProduct-container">
      <div className="productOwner">
        <img src={logitechLogo} alt="" />
        <div className="prodOwner-info">
          <h4>Logitech Indonesia</h4>
          <p>Central Jakarta</p>
        </div>
      </div>
      <div className="productsList">
        {cart.map(
          ({
            productId,
            productName,
            productPrice,
            productImg,
            quantityProduct,
            //checked
          }) => {
            return (
              <React.Fragment key={productId}>
                <ChoicesProductCard
                  productId={productId}
                  productImage={productImg}
                  productName={productName}
                  productPrise={productPrice}
                  quantityProduct={quantityProduct}
                  // checked={checked}
                />
                <div className="borderBottom"></div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ChoicesProduct;
