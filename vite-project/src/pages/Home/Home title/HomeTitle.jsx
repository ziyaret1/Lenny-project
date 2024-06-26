import "./homeTitle.scss";
import Buttons from "../../../components/Buttons/Buttons";
import spyXshirt from "../../../assets/images/greenmanjacket.png";
import { PiStarFill, PiDotOutlineFill } from "react-icons/pi";
import stickerUp from "../../../assets/images/stickerUp.png";
import stickerDown from "../../../assets/images/stickerDown.png";
import ProductCard from "../../../components/Product Cards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeTitle = () => {
  const scrollOnClick = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div className="homeTitle-container">
            <div className="header-left">
              <h1>Upgrade Your Wardrobe With Our Collection</h1>
              <p>
                A wardrobe defines your style. Style is one of the elements that
                define personality. Organize your closet before spring,
                declutter what is not required, and add refreshed fashion.
              </p>
              <div className="header-buttons">
                <Buttons
                  onClick={scrollOnClick}
                  text="Buy Now"
                  color="#1E4C2F"
                  textColor="white"
                />
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
              <ProductCard
                prodImage2={spyXshirt}
                prodName="Green Jacket V2"
                prodOwner="North Purwokerto"
                prodStar={<PiStarFill />}
                prodPopularity="4,8"
                dotIcon={<PiDotOutlineFill />}
                prodSold="1,238 Sold"
              />
              {/* {
              products.length = 1 &&  <ProductCard prodImage={products?.data[1]?.attributes?.image?.data[0]?.attributes?.url} prodName={products?.data[1]?.attributes?.title} prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity={products?.data[1]?.attributes?.rating} dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/> 
            } */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySlider2">
          <div className="homeTitle-container container2">
            <div className="header-left">
              <h1>Upgrade Your Wardrobe With Our Collection</h1>
              <p>
                A wardrobe defines your style. Style is one of the elements that
                define personality. Organize your closet before spring,
                declutter what is not required, and add refreshed fashion.
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
              <ProductCard
                prodImage2={spyXshirt}
                prodName="Green Jacket V2"
                prodOwner="North Purwokerto"
                prodStar={<PiStarFill />}
                prodPopularity="4,8"
                dotIcon={<PiDotOutlineFill />}
                prodSold="1,238 Sold"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeTitle;
