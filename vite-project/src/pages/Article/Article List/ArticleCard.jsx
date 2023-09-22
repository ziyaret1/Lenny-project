import "./articleCard.scss";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ArticleCard = ({ artCardImg, artCardTitle }) => {
  return (
    <div className="articleCard-container">
      <div className="articleCard-img">
        <img src={artCardImg} alt="" />
      </div>
      <div className="articleCard-readers">
        <p>Lenny Article</p>
        <span>6 Min Read</span>
      </div>
      <div className="articleCard-title">
        <h3>{artCardTitle}</h3>
        <Link className="link" to="/detailarticle">
          <p>
            Read More <LiaAngleRightSolid />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
