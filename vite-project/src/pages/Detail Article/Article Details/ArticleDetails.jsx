import "./articleDetails.scss";
import bigArticleImage from "../../../assets/images/bigArticleImage.png";
import RelatedArticle from "../Related Article/RelatedArticle";
import Breadcrumb from '../../../layouts/Breadcrumb/Breadcrumb'

const ArticleDetails = () => {
  return (
  <div className="fullDiv">
    <Breadcrumb/>
    <div className="articleDetails-container">
      <div className="articleDetail-Image">
        <img src={bigArticleImage} alt="" />
      </div>
      <div className="relatedArticle-articleDetails">
        <div className="relatedArt">
          <RelatedArticle />
        </div>
        <div className="articleTitle-description">
          <h2>
            I’m an Lenny delivery driver in Baltimore. My favorite features on
            our vans from Rivian are the air-conditioned seats and the screen
            built into the dash.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sit dignissim vel
            lacus aliquet massa quam nisi tincidunt. Ante eu ut arcu ultrices
            vitae libero interdum. Ac tempus elementum suspendisse amet massa
            nec nunc ullamcorper venenatis. Sed id tortor in nibh tortor
            commodo. Ultricies et vitae massa ut et mi. Quam amet nulla lobortis
            rhoncus ipsum pharetra elementum magna vitae. Eget orci feugiat
            lectus aliquet. Amet pretium dui nunc laoreet sed lorem. Pretium
            volutpat mauris sit curabitur pellentesque orci. Integer egestas
            dictum quis eget in libero eget. <br /> <br /> Elementum magna amet
            quam sem rhoncus lacus. Augue dignissim enim elementum egestas at
            sed dui. Consequat nibh ut urna morbi a. Convallis nulla a pulvinar
            augue cursus neque tortor. Accumsan erat ultrices magna mattis
            egestas vel. Consequat at arcu risus a enim at orci velit. Nam
            consequat mauris malesuada phasellus vel consequat varius vitae
            suspendisse. Adipiscing adipiscing lacus nulla tortor ultrices sed
            eget. Aliquet ornare adipiscing lacus non elit vel. Tortor sed
            adipiscing imperdiet tortor quam dolor augue molestie. Interdum
            turpis in tortor velit urna augue.
          </p>
          <h3>Sed id tortor in nibh tortor commodo</h3>
          <p>
            Lorem vitae tristique aliquam at id morbi. Quis sit lectus orci
            accumsan neque diam scelerisque euismod. Vulputate parturient dictum
            eget et elit phasellus. Eget ullamcorper sed imperdiet orci arcu
            nibh sit potenti fringilla. Vel enim est cursus eu phasellus
            porttitor. Etiam donec senectus viverra sit pretium amet mattis quis
            adipiscing. Tristique blandit enim laoreet elit commodo. Sit
            nascetur auctor porta velit id nec ultricies aenean dolor. Tincidunt
            sagittis a commodo tellus. Vulputate ullamcorper facilisis in ac eu
            risus quis placerat. Id egestas gravida sit aliquam neque in ut
            quam. Tempus adipiscing tortor viverra sociis elementum adipiscing
            nisi cras.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArticleDetails;
