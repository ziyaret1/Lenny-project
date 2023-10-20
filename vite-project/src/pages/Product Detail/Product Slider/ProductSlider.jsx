import "./productSlider.scss";
import { PiStarFill } from "react-icons/pi";
import { PiDotOutlineFill } from "react-icons/pi";
import chartIcon from "../../../assets/icons/shopping-cartMiniIcon.png";
import React, { useState } from "react";
import { getSingleProduct } from "../../../api/product.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
// import { useSelector } from "react-redux";



const ProductSlider = ({ productId }) => {

  // const {loading} = useSelector((state) => state.products)

  const [loading, setLoading] = useState(true)

  const [singleProd, setSingleProd] = useState(null);
  const [images, setImages] = useState([]);
  React.useEffect(() => {
    const getSingleProd = async () => {
      const res = await getSingleProduct(productId);
      setSingleProd(res.data);
      console.log(res, "sliderimg");
    };
    getSingleProd();
  }, [productId]);

  React.useEffect(() => {

    if (singleProd) {
      setLoading(true)
      const imageArray = singleProd?.attributes?.image?.data || [];
      const imageList = imageArray.map((image) => ({
        original: `${import.meta.env.VITE_UPLOAD_IMAGE}${image?.attributes?.url}`,
        thumbnail: `${import.meta.env.VITE_UPLOAD_IMAGE}${image?.attributes?.url}`,
      }));
      setImages(imageList); // Image yeni datalari gonderirik
      setLoading(false)
    }
  }, [singleProd]);


  return (
    <div className="productSlider-container">
      <div className="productImages">
        {
          loading ?  <p>Loading...</p> 
          :  <ImageGallery items={images} />
 
        }
      </div>
      <div className="productInfo-buying">
        <div className="productInfo">
          <h1>{singleProd?.attributes?.title}</h1>
          <div className="productRatingDiv">
            <PiStarFill className="star" />
            <p>{singleProd?.attributes?.rating}</p>
            <PiDotOutlineFill className="dot" />
            <p>1,248 Sold</p>
          </div>
          <h2>${singleProd?.attributes?.price}</h2>
          <p>
            {/* {singleProd?.attributes?.description.length > 200
              ? singleProd?.attributes?.description.slice(0, 200) + "read more"
              : singleProd?.attributes?.description} */}
            {singleProd?.attributes?.description}
          </p>
        </div>
        <div className="borderBottom"></div>
        <div className="productBuying">
          <h3>Product Variant</h3>
          <div className="productVariant">
            <div className="prodType">
              <p>Type</p>
              <form>
                <select name="">
                  <option value="">{singleProd?.attributes?.type}</option>
                  <option value="">Wirely</option>
                </select>
              </form>
            </div>
            <div className="prodColor">
              <p>Color</p>
              <form>
                <select name="">
                  <option className="option" value="">
                    {singleProd?.attributes?.color}
                  </option>
                  <option value="">White</option>
                </select>
              </form>
            </div>
          </div>
          <div className="prodButtons">
            <button className="buyButton">Buy Now</button>
            <button className="addChartButton">
              <img src={chartIcon} alt="" />
              Add to Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
