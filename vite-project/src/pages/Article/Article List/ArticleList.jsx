import "./articleList.scss";
import ArticleCard from "./ArticleCard";
import popArtImg from "../../../assets/images/popArticle.png";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <div className="articleList-container">
      <Link className="articleLink" to="/detailarticle">
        <ArticleCard
          artCardImg={popArtImg}
          artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
        />
      </Link>

      <ArticleCard
        artCardImg={popArtImg}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtImg}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtImg}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
    </div>
  );
};

export default ArticleList;
