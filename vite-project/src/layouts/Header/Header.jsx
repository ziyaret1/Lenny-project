import './header.scss'
import logo from '../../assets/images/Home-logo.png'
import { CiSearch } from "react-icons/ci";
// import {BiSolidUser} from "react-icons/bi"
import shoppingCart from '../../assets/icons/shopping-cart.png'
import notification from '../../assets/icons/notification.png'
import message from '../../assets/icons/sms.png'
import userPhoto from '../../assets/images/profilePhoto.png'

const Header = () => {
  return (
    <div className="header-container">
     <div className="logo">
        <img src={logo} alt="" />
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
        <input type="text" placeholder='Search on lenny...' />
        </form>
        </div>
        <div className="search-div">
            <CiSearch className='search'/>
        </div>
     </div>
     <div className="basket-user">
        <img src={shoppingCart} className='basket' alt="" />
        <img src={notification} className='notification' alt="" />
        <img src={message} className="message" alt="" />
        <div className="borderHead"></div>
        {/* <BiSolidUser className='user'/> */}
        <img src={userPhoto} className='userPhoto' alt="" />
     </div>
    </div>
  )
}

export default Header