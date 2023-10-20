import "./header.scss";
import logo from "../../assets/images/Home-logo.png";
import { CiSearch } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import shoppingCart from "../../assets/icons/shopping-cart.png";
import notification from "../../assets/icons/notification.png";
import message from "../../assets/icons/sms.png";
// import userPhoto from '../../assets/images/profilePhoto.png'
import hambMenu from '../../assets/icons/menu.png'
import { Link } from "react-router-dom";

const Header = () => {
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
            <input type="text" placeholder="Search on lenny..." />
          </form>
        </div>
        <div className="search-div">
          <CiSearch className="search" />
        </div>
      </div>
      <div className="input-mobile">
        <form action="">
          <input type="text" placeholder="Search product" />
          <CiSearch className="search" />
        </form>
      </div>
      <div className="basket-user">
          <img src={shoppingCart} className="basket" alt="" />
        {/* <p className="productInCart">6</p> */}
        <img src={notification} className="notification" alt="" />
        <img src={message} className="message" alt="" />
        <div className="borderHead"></div>
        <BiSolidUser className="user"/>
        <img className="hambMenu" src={hambMenu} alt="" />
        {/* <img src={userPhoto} className='userPhoto' alt="" /> */}
        {/* <p className="userName">Z</p> */}
      </div>
      {/* <div className="signUp">{signUp && <SignUp />}</div> */}
    </div>
  );
};

export default Header;
