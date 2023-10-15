import "./searchTitle.scss";
import { PiGridFourFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import filterIcon from '../../../assets/icons/filter.png'

const SearchTitle = () => {
  return (
    <div className="searchTitle-container">
      <div className="showingProd-amounts">
        <h1>Showing product for “Gaming Gear”</h1>
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
        <img className="filterIcon" src={filterIcon} alt="" />
        <div className="borderRight"></div>
        <PiGridFourFill className="gridIcon" />
        <RxHamburgerMenu className="hamburgIcon" />
        </div>
      </div>
    </div>
  );
};

export default SearchTitle;
