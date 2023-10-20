import "./popularArticle.scss";
import popArticleImg from "../../../assets/images/popArticle.png";
import { LiaAngleRightSolid } from "react-icons/lia";

const PopularArticle = () => {
  return (
    <div className="popularArticle-container">
      <div className="popArt-cont">
        <div className="popArticleImg"> 
          <img src={popArticleImg} alt="" />
        </div>
        <div className="popArticleInfo">
          <h4>
            I’m an Lenny delivery driver in Baltimore. My favorite features on
            our vans from Rivian are the air-conditioned seats and the screen
            built into the dash.
          </h4>
          <p>
            Jerome Stanline is a delivery driver for Kangaroo Direct, an Lenny
            Delivery Service Partner in the Baltimore, Maryland area. Follow her
            on a tour of her favorite features in the new electric delivery van.
          </p>
          <span>
            Read More
            <LiaAngleRightSolid />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
