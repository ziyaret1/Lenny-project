import "./filterOption.scss";
import FilterCheckBox from "./FilterCheckBox";
import { PiStarFill } from "react-icons/pi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { setCurrentObj } from "../../../Redux/reducer/Categories/categoryReducer";

const FilterOption = () => {
  const dispatch = useDispatch();

  return (
    <div className="fullContainer">
      <div className="filterOption-cont">
        <div className="filterOptTitle">
          <h3>Filter Option</h3>
        </div>
        <div className="borderBottom"></div>
        <div className="filterBoxCont">
          <div className="filterBoxes">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="boxTitle">
                    <h4>Best Filter</h4>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FilterCheckBox
                    onChange={() =>
                      dispatch(setCurrentObj({ name: "rating", value: true }))
                    }
                    boxStarIcon={<PiStarFill />}
                    boxText="4 stars or upper"
                  />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Same-day delivery" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="COD" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Discount" />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="borderBottom"></div>
          </div>
          <div className="filterBoxes">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="boxTitle">
                    <h4>Color</h4>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FilterCheckBox
                    boxText="White"
                    onChange={(event) =>
                      event ?
                      dispatch(setCurrentObj({ name: "color", value: "White" }))
                      : ""
                    }
                  />
                </Typography>
                <Typography>
                <FilterCheckBox
                    boxText="Black"
                    onChange={() =>
                      dispatch(setCurrentObj({ name: "color", value: "Black " }))
                    }
                  />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Green" onChange={() =>
                      dispatch(setCurrentObj({ name: "color", value: "Green" }))
                    }/>
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Blue" onChange={() =>
                      dispatch(setCurrentObj({ name: "color", value: "Blue" }))
                    }/>
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Orange" onChange={() =>
                      dispatch(setCurrentObj({ name: "color", value: "Orange" }))
                    }/>
                </Typography>
                <p className="showAll">Show All</p>
              </AccordionDetails>
            </Accordion>
            <div className="borderBottom"></div>
          </div>
          <div className="filterBoxes">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="boxTitle">
                    <h4>Category</h4>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FilterCheckBox boxText="orupper" />
                </Typography>

                <Typography>
                  <FilterCheckBox boxText="Same-day delivery" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="COD" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Discount" />
                </Typography>
                <p className="showAll">Show All Categories</p>
              </AccordionDetails>
            </Accordion>
            <div className="borderBottom"></div>
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="boxTitle">
                <h4>Price Range</h4>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterOption;
