import "./featuredCategory.scss";
import FeaturedCards from "./FeaturedCards";
import Buttons from "../../../components/Buttons/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import React from "react";
import { getCategories } from "../../../Redux/reducer/Categories/categoryThunk";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux/es/hooks/useSelector";


const FeaturedCategory = () => {
 
  const dispatch = useDispatch()
  const {categories} = useSelector((state) => state.categories)
  React.useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);
  console.log(categories, "data");

  return (
    <div className="featuredCategory-container">
      <div className="features-head">
        <h1>Featured Category</h1>
        <Buttons text="View Detail" color="white" textColor="#1E4C2F" />
      </div>
      <div className="swiperCont">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperScrol">
            <div className="features-footer">
              {categories?.data?.map(({ id, attributes }) => {
                return (
                  <Link key={id} className="link" to={`/searchres/${id}`}>
                    <FeaturedCards
                      fIcon={attributes?.image?.data?.attributes?.url}
                      fText={attributes.title}
                    />
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperScrol swiperCont2">
            <div className="features-footer">
              {categories?.data?.map(({ id, attributes }) => {
                return (
                  <Link key={id} className="link" to={`/searchres/${id}`}>
                    <FeaturedCards
                      fIcon={attributes?.image?.data?.attributes?.url}
                      fText={attributes.title}
                    />
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCategory;
