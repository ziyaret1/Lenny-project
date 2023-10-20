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
  onClick,
}) => {

  let prodStr = prodName
  let parseProdStr = prodStr.length > 20 ? prodStr.slice(0, 20) + "..." : prodStr


  return (
    <div className="productCard-container" onClick={onClick}>
      <div className="prodCardCont">
        <div className="popProdImage">
          <div className="heartIcon">
            <PiHeart onClick={() => console.log('okay')} className="heart" />
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
              <h2 className="prodName">{parseProdStr}</h2>
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
