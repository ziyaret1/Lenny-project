import './reviewsFilter.scss'
import FilterCheckBox from '../../../Search Result/Filter option/FilterCheckBox'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PiStarFill } from "react-icons/pi";

const ReviewsFilter = () => {
  return (
    <div className='reviewsFilter-container'>
         <div className="reviewsFilter-cont">
         <div className="reviewFilter-title">
          <h3>Reviews Filter</h3>
        </div>
        <div className="borderBottom"></div>
        <div className="filterBoxes">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="boxTitle">
                    <h4>Rating</h4>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FilterCheckBox
                    boxStarIcon={<PiStarFill />}
                    boxText="5"
                  />
                </Typography>
                <Typography>
                <FilterCheckBox
                    boxStarIcon={<PiStarFill />}
                    boxText="4"
                  />
                </Typography>
                <Typography>
                <FilterCheckBox
                    boxStarIcon={<PiStarFill />}
                    boxText="3"
                  />
                </Typography>
                <Typography>
                <FilterCheckBox
                    boxStarIcon={<PiStarFill />}
                    boxText="2"
                  />
                </Typography>
                <Typography>
                <FilterCheckBox
                    boxStarIcon={<PiStarFill />}
                    boxText="1"
                  />
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
                    <h4>Review Topics</h4>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FilterCheckBox
                    boxText="Product Quality"
                  />
                </Typography>

                <Typography>
                  <FilterCheckBox boxText="Seller Services" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Product Price" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Shipment" />
                </Typography>
                <Typography>
                  <FilterCheckBox boxText="Match with Description" />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        </div>
  );
};

export default ReviewsFilter;
