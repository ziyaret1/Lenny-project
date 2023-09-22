import "./lennyMiniArticle.scss";
import DesktopImage from "../../../assets/images/makeYourDeskImg.png";
import Buttons from "../../../components/Buttons/Buttons";
import LennyArticleCards from "./LennyArticleCards";
import { Link } from "react-router-dom";

const LennyMiniArticle = () => {
  return (
    <div className="lennyMiniArticle-container">
      <div className="lennyArtHeader">
        <h1>Lenny`s Article</h1>
        <Link className="lennyButton" to="/article">
          <Buttons text="View Detail" color="white" textColor="#1E4C2F" />
        </Link>
      </div>
      <div className="lennyArtCards">
        <LennyArticleCards
          artImage={DesktopImage}
          artDate="22 Dec 2022"
          artContext="Make your desk more neat and beautiful"
          artParagraf="Lorem ipsum dolor sit amet consectetur. Arcu
pellentesque etiam scelerisque pharetra id.
Maecenas diam eu amet cras"
        />
        <LennyArticleCards
          artImage={DesktopImage}
          artDate="22 Dec 2022"
          artContext="Make your desk more neat and beautiful"
          artParagraf="Lorem ipsum dolor sit amet consectetur. Arcu
pellentesque etiam scelerisque pharetra id.
Maecenas diam eu amet cras"
        />
        <LennyArticleCards
          artImage={DesktopImage}
          artDate="22 Dec 2022"
          artContext="Make your desk more neat and beautiful"
          artParagraf="Lorem ipsum dolor sit amet consectetur. Arcu
pellentesque etiam scelerisque pharetra id.
Maecenas diam eu amet cras"
        />
      </div>
    </div>
  );
};

export default LennyMiniArticle;
