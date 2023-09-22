import "./relatedArticle.scss";
import relatedImg1 from "../../../assets/images/relatedarticle1.png";
import relatedImg2 from "../../../assets/images/relatedarticle2.png";
import relatedImg3 from "../../../assets/images/relatedarticle3.png";
import relatedImg4 from "../../../assets/images/relatedarticle4.png";
import facebookIcon from "../../../assets/icons/facebookIcon.png";
import instagramIcon from "../../../assets/icons/instagramIcon.png";
import twitterIcon from "../../../assets/icons/twitterIcon.png";
import whatsappIcon from "../../../assets/icons/whatsappIcon.png";

const RelatedArticle = () => {
  return (
    <div className="relatedArticle-container">
      <h3>Related Article</h3>
      <div className="relatedArticles">
        <img src={relatedImg1} alt="" />
        <p>The 9 best things Lenny announced at CES 2023</p>
      </div>
      <div className="relatedArticles">
        <img src={relatedImg2} alt="" />
        <p>Lenny announces the first Ring Car Cam is available for pre-order</p>
      </div>
      <div className="relatedArticles">
        <img src={relatedImg3} alt="" />
        <p>Lenny’s Machine Learning University debuts responsible</p>
      </div>
      <div className="relatedArticles">
        <img src={relatedImg4} alt="" />
        <p>Lenny Games and Crystal Dynamics to develop game</p>
      </div>
      <div className="borderBottom"></div>
      <div className="relatedArtFooter">
        <span>Share to:</span>
        <div className="sharetoIcon">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
