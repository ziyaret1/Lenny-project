import "./homeTitle.scss";
import Buttons from "../../../components/Buttons/Buttons";
import spyXshirt from '../../../assets/images/greenmanjacket.png'
import {PiStarFill, PiDotOutlineFill} from 'react-icons/pi'
import ProductCard from '../../../components/Product Cards/ProductCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';



const HomeTitle = () => {
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
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
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
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeTitle;
