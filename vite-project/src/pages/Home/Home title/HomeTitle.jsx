import "./homeTitle.scss";
import Buttons from "../../../components/Buttons/Buttons";
import spyXshirt from '../../../assets/images/greenmanjacket.png'
import {PiStarFill, PiDotOutlineFill} from 'react-icons/pi'
import stickerUp from '../../../assets/images/stickerUp.png'
import stickerDown from '../../../assets/images/stickerDown.png'
import ProductCard from '../../../components/Product Cards/ProductCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import React from "react";
import { getProducts } from "../../../api/product";


const HomeTitle = () => {
  const [products, setProducts] = React.useState([]);
  console.log(products, 'product');

  React.useEffect(() => {
    async function getAllProduct() {
      const data2 = await getProducts();
      setProducts(data2); 
      
    }
    getAllProduct();
  }, []);

  
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div className="homeTitle-container">
            <div className="header-left">
              <h1>Upgrade Your Wardrobe With Our Collection</h1>
              <p>
                Eget neque aenean viverra aliquam tortor diam nunc. Dis
                pellentesque lectus quis velit fusce aenean nunc dui
                consectetur. Eu lorem est ullamcorper nisl amet non mollis.
              </p>
              <div className="header-buttons">
                <Buttons text="Buy Now" color="#1E4C2F" textColor="white" />
                <Buttons
                  text="View Details"
                  color="white"
                  textColor="#1E4C2F"
                />
              </div>
            </div>
            <div className="header-right"> 
            <div className="stickers">
              <img className="stickerUp" src={stickerUp} alt="" />
              <img className="stickerDown" src={stickerDown} alt="" />
            </div>
                        <ProductCard prodImage2={spyXshirt} prodName="Green Jacket V2" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>                                                
            {/* {
              products.length = 1 &&  <ProductCard prodImage={products?.data[1]?.attributes?.image?.data[0]?.attributes?.url} prodName={products?.data[1]?.attributes?.title} prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity={products?.data[1]?.attributes?.rating} dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/> 
            } */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="homeTitle-container">
            <div className="header-left">
              <h1>Upgrade Your Wardrobe With Our Collection</h1>
              <p>
                Eget neque aenean viverra aliquam tortor diam nunc. Dis
                pellentesque lectus quis velit fusce aenean nunc dui
                consectetur. Eu lorem est ullamcorper nisl amet non mollis.
              </p>
              <div className="header-buttons">
                <Buttons text="Buy Now" color="#1E4C2F" textColor="white" />
                <Buttons
                  text="View Details"
                  color="white"
                  textColor="#1E4C2F"
                />
              </div>
            </div>
            <div className="header-right">
            <div className="stickers">
              <img className="stickerUp" src={stickerUp} alt="" />
              <img className="stickerDown" src={stickerDown} alt="" />
            </div>
            <ProductCard prodImage2={spyXshirt} prodName="Green Jacket V2" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeTitle;
