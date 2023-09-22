import "./header.scss";
import logo from "../../assets/images/Home-logo.png";
import { CiSearch } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import shoppingCart from "../../assets/icons/shopping-cart.png";
import notification from "../../assets/icons/notification.png";
import message from "../../assets/icons/sms.png";
import SignUp from "../../pages/Login/Sign Up/SignUp";
import { useState } from "react";
// import userPhoto from '../../assets/images/profilePhoto.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [signUp, setSignUp] = useState(false);
  const toggleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="input-nav">
        <div className="inputs">
          <form action="">
            <label htmlFor="select"></label>
            <select>
              <option value="allCategory">All Categories</option>
              <option value="home">Home</option>
              <option value="electronic">Electronic</option>
              <option value="blog">Blog</option>
            </select>
            <div className="borderRight"></div>
            <input type="text" placeholder="Search on lenny..." />
          </form>
        </div>
        <div className="search-div">
          <CiSearch className="search" />
        </div>
      </div>
      <div className="basket-user">
        <Link className="basket-user" to="/shopcard">
          <img src={shoppingCart} className="basket" alt="" />
        </Link>

        <p className="productInCart">6</p>
        <img src={notification} className="notification" alt="" />
        <img src={message} className="message" alt="" />
        <div className="borderHead"></div>
        <BiSolidUser className="user" onClick={toggleSignUp} />
        {/* <img src={userPhoto} className='userPhoto' alt="" /> */}
      </div>
      <div className="signUp">{signUp && <SignUp />}</div>
    </div>
  );
};

export default Header;
