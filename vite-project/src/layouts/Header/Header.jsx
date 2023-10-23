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
import React, { useState } from 'react'
import SignUp from '../../pages/Login/Sign Up/SignUp'

//!modal
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignIn from "../../pages/Login/Sign In/SignIn";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  boxShadow: 'none',
  p: 0,
  outline: 'none'
};

const Header = () => {

  const [openSignIn, setopenSignIn] = useState(false)

  const [openSignUp, setOpenSignUp] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setopenSignIn(true);
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
    setopenSignIn(false)
    setOpenSignUp(false)
  }


  const handleOnSearch = (e) => {
    e.preventDefault()
    console.log('clickSearch');
  }

  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="input-nav">
        <div className="inputs">
          <form action="" onSubmit={handleOnSearch}>
            <label htmlFor="select"></label>
            <input type="text" placeholder="Search on lenny..." />
          </form>
        </div>
        <div className="search-div">
          <CiSearch className="search" type="submit" onClick={handleOnSearch}/>
        </div>
      </div>
      <div className="input-mobile">
        <form action="" >
          <input type="text" placeholder="Search product"/>
          <CiSearch className="search"/>
        </form>
      </div>
      <div className="basket-user">
          <img src={shoppingCart} className="basket" alt=""/>
        {/* <p className="productInCart">6</p> */}
        <img src={notification} className="notification" alt="" />
        <img src={message} className="message" alt="" />
        <div className="borderHead"></div>
        <BiSolidUser className="user"  onClick={handleOpen}/>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            openSignIn && <SignIn setopenSignIn={setopenSignIn} setOpenSignUp={setOpenSignUp}/>
          }
          {
            openSignUp &&  <SignUp/>
          }
        </Box>
      </Modal>
        <img className="hambMenu" src={hambMenu} alt="" />
        {/* <img src={userPhoto} className='userPhoto' alt="" /> */}
        {/* <p className="userName">Z</p> */}
      </div>
      {/* <div className="signUp">{signUp && <SignUp />}</div> */}
    </div>
  );
};

export default Header;
