/* eslint-disable react/prop-types */
import "./productCard.scss";
import { PiHeart } from "react-icons/pi";

const ProductCard = ({
  prodImage,
  prodImage2,
  prodName,
  prodAmount,
  prodOwner,
  prodStar,
  prodPopularity,
  dotIcon,
  prodSold,
}) => {
  return (
    <div className="productCard-container">
      <div className="prodCardCont">
        <div className="popProdImage">
          <div className="heartIcon">
            <PiHeart className="heart" />
          </div>
          
          {
            prodImage ? <img
            src={`${import.meta.env.VITE_UPLOAD_IMAGE}${prodImage}`}
            alt=""
          /> : <img src={prodImage2} alt="" />
          }
         
        </div>
        <div className="popProdContext">
          <div className="prodName-owner">
            <div className="popProdName">
              <h2 className="prodName">{prodName}</h2>
              {prodAmount ? <h2 className="prodAmount">{prodAmount}</h2> : ""}
            </div>
            <div className="popProdOwner">
              <p>{prodOwner}</p>
            </div>
          </div>
          <div className="popProdFooter">
            <div className="prodStar">{prodStar}</div>
            <p>{prodPopularity}</p>
            <div className="prodDot">{dotIcon}</div>
            <p>{prodSold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
