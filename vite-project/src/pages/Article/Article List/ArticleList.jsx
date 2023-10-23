import "./articleList.scss";
import ArticleCard from "./ArticleCard";
import popArtImg1 from "../../../assets/images/popArticle.png";
import popArtimg2 from '../../../assets/images/lennyBlogIMG2.png'
import popArtimg3 from '../../../assets/images/lennyBlogIMG3.png'
import popArtimg4 from '../../../assets/images/lennyBlogIMG4.png'
import popArtimg5 from '../../../assets/images/lennyBlogIMG5.png'
import popArtimg6 from '../../../assets/images/lennyBlogIMG6.png'
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <div className="articleList-container">
      <Link className="articleLink" to="/detailarticle">
        <ArticleCard
          artCardImg={popArtImg1}
          artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
        />
      </Link>

      <ArticleCard
        artCardImg={popArtimg2}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtimg3}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtimg4}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtimg5}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
      <ArticleCard
        artCardImg={popArtimg6}
        artCardTitle="Kindle buying guide: Find out which
e-reader is right for you"
      />
    </div>
  );
};

export default ArticleList;
