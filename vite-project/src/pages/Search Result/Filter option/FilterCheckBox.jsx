import "./filterCheckBox.scss";

const FilterCheckBox = ({ boxStarIcon, boxText, showAllText, onChange }) => {
  return (
    <div className="filterCheckBox-container">
      <div className="checkBoxes">
        <label className="labelCheckBox">
          <input type="checkbox" onChange={onChange}/>
          <span></span>
          {boxStarIcon ? <icon className="boxStar">{boxStarIcon}</icon> : ""}
          {boxText}
        </label>
      </div>
      <div className="showAllText">
        {showAllText ? <h4>{showAllText}</h4> : ""}
      </div>
    </div>
  );
};

export default FilterCheckBox;
