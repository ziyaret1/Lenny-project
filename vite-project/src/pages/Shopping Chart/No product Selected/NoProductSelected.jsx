import "./noProductSelected.scss";
import chartIcon from "../../../assets/icons/shopping-cartMiniIcon.png";
import { Link } from "react-router-dom";

const NoProductSelected = () => {
  return (
    <div className="noProductSelected-container">
      <div className="noProd-cont">
        <img src={chartIcon} alt="" />
        <p>No product selected</p>
      </div>
      <Link to="/">
        <button>Shopping now</button>
      </Link>
    </div>
  );
};

export default NoProductSelected;
