import "./featuredCategory.scss";
import FeaturedCards from "./FeaturedCards";
import Buttons from "../../../components/Buttons/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import React, { useState } from "react";
import { getCategories } from "../../../api/product";
import { Link } from "react-router-dom";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    getAllCategories();
  }, []);

  console.log(categories, "data");

  return (
    <div className="featuredCategory-container">
      <div className="features-head">
        <h1>Featured Category</h1>
        <Buttons text="View Detail" color="white" textColor="#1E4C2F" />
      </div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperScrol">
          <div className="features-footer">
            <Link className="features-footer" to="/searchres">
              {categories?.data?.map(({ id, attributes }) => {
                return (
                  <FeaturedCards
                    key={id}
                    fIcon={attributes?.image?.data?.attributes?.url}
                    fText={attributes.title}
                  />
                );
              })}
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperScrol">
          <div className="features-footer">
            <Link className="features-footer" to="/searchres">
              {categories?.data?.map(({ id, attributes }) => {
                return (
                  <FeaturedCards
                    key={id}
                    fIcon={attributes?.image?.data?.attributes?.url}
                    fText={attributes.title}
                  />
                );
              })}
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedCategory;
