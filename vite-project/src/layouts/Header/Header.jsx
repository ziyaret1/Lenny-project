import './header.scss'
import logo from '../../assets/images/Home-logo.png'
import { CiSearch } from "react-icons/ci";
import {HiShoppingCart} from "react-icons/hi"
import {BiSolidUser} from "react-icons/bi"
// import {IoMdNotifications} from 'react-icons/io'
// import {MdLocalPostOffice} from 'react-icons/md'

export const Header = () => {
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
        {/* <IoMdNotifications className='notification'/>
        <MdLocalPostOffice className="postLetter"/> */}
        <HiShoppingCart className='basket'/>
        <div className="borderHead"></div>
        <BiSolidUser className='user'/>
     </div>
    </div>
  )
}
