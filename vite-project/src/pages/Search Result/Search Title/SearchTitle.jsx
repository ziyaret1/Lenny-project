import "./searchTitle.scss";
import { PiGridFourFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import filterIcon from '../../../assets/icons/filter.png'
import React, { useState } from "react";
import FilterOption from '../Filter option/FilterOption'
import { useDispatch } from "react-redux";
import { getProdbyCategoryId } from "../../../Redux/reducer/Categories/categoryThunk";
import { useParams } from "react-router-dom";

const SearchTitle = () => {

  const [openFilter, setOpenFilter] = useState(false)
  const toggleMenu = () => {
    setOpenFilter(!openFilter);
  };

  const params = useParams() 
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getProdbyCategoryId({
      id: params.categoryId,
    }))
  }, [ dispatch, params.categoryId])

  return (
    <div className="searchTitle-container">
        {
          openFilter ? <FilterOption/> : ""
        }
      <div className="showingProd-amounts">
        <h1>Showing product for: Gaming Gear</h1>
        <p>Showing 1 - 60 Products</p>
      </div>
      <div className="sortBy-cont">
        <div className="sortLeftDiv">
          <span>Sort By:</span>
        <form>
          <select name="">
            Relevant Products
            <option className="option" value="relevand">
              Relevant Product
            </option>
            <option className="option" value="relevand">
              Asc
            </option>
            <option className="option" value="relevand">
              Desc
            </option>
          </select>
        </form>
        </div>
        <div className="sortRightDiv">
        <img className="filterIcon" src={filterIcon} alt="" onClick={toggleMenu} />
        <div className="borderRight"></div>
        <PiGridFourFill className="gridIcon" />
        <RxHamburgerMenu className="hamburgIcon" />
        </div>
      </div>
    </div>
  );
};

export default SearchTitle;
