import React from "react";
import "./filterOption.scss";
import FilterCheckBox from "./FilterCheckBox";
import { PiStarFill } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";

const FilterOption = () => {
  return (
    <div className="fullContainer">
      <div className="filterOption-cont">
        <div className="filterOptTitle">
          <h3>Filter Option</h3>
        </div>
        <div className="borderBottom"></div>
        <div className="filterBoxCont">
          <div className="filterBoxes">
            <div className="boxTitle">
              <h4>Best Filter</h4>
              <MdKeyboardArrowUp />
            </div>
            <FilterCheckBox
              boxStarIcon={<PiStarFill />}
              boxText="4 stars or upper"
            />
            <FilterCheckBox boxText="Same-day delivery" />
            <FilterCheckBox boxText="COD" />
            <FilterCheckBox boxText="Discount" />
            <div className="borderBottom"></div>
          </div>
          <div className="filterBoxes">
            <div className="boxTitle">
              <h4>Best Filter</h4>
              <MdKeyboardArrowUp />
            </div>
            <FilterCheckBox boxText="4 stars or upper" />
            <FilterCheckBox boxText="Same-day delivery" />
            <FilterCheckBox boxText="COD" />
            <FilterCheckBox boxText="Discount" />
            <FilterCheckBox boxText="Discount" showAllText="Show All" />
            <div className="borderBottom"></div>
          </div>
          <div className="filterBoxes">
            <div className="boxTitle">
              <h4>Best Filter</h4>
              <MdKeyboardArrowUp />
            </div>
            <FilterCheckBox boxText="4 stars or upper" />
            <FilterCheckBox boxText="Same-day delivery" />
            <FilterCheckBox boxText="COD" />
            <FilterCheckBox boxText="Discount" />
            <FilterCheckBox
              boxText="Discount"
              showAllText="Show All Category"
            />
            <div className="borderBottom"></div>
          </div>
        </div>
        <div className="boxTitle">
          <h4>Best Filter</h4>
          <MdKeyboardArrowUp />
        </div>
        <div className="selectChange">
          <div className="changeInput">
            <form>
              <select name="change" id="">
                <option value="usd">USD</option>
                <option value="azn">AZN</option>
                <option value="eur">EUR</option>
              </select>
              <div className="borderForChange"></div>
              <input type="text" placeholder="Minimum price" />
            </form>
          </div>
          <div className="changeInput">
            <form>
              <select name="change" id="">
                <option value="usd">USD</option>
                <option value="azn">AZN</option>
                <option value="eur">EUR</option>
              </select>
              <div className="borderForChange"></div>
              <input type="text" placeholder="Minimum price" />
            </form>
          </div>
          <div className="changeButtons">
            <button>$0 - $200</button>
            <button>$200 - $500</button>
            <button>$500 - $1500</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
