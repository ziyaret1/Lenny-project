import "./header.scss";
import logo from "../../assets/images/Home-logo.png";
import { CiSearch } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import shoppingCart from "../../assets/icons/shopping-cart.png";
import notification from "../../assets/icons/notification.png";
// import message from "../../assets/icons/sms.png";
import {BsHeartFill} from 'react-icons/bs'
// import userPhoto from "../../assets/images/profilePhoto.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import SignUp from "../../pages/Login/Sign Up/SignUp";
import SignOut from "../Sign Out/SignOut";
import RegisterSuccess from "../../pages/Login/Register success/RegisterSuccess";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignIn from "../../pages/Login/Sign In/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { getSearchingData } from "../../Redux/reducer/Search/searchThunk";

//! MODAL
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: "none",
  p: 0,
  outline: "none",
};

const Header = () => { 

  const {cart} = useSelector((state) => state.shopCard)

  const [openSignIn, setopenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setopenSignIn(true);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setopenSignIn(false);
    setOpenSignUp(false);
    setOpenSuccess(false);
    setOpenLogout(false);
  };

  const handleOpenLogout = () => {
    setopenSignIn(false);
    setOpenLogout(!openLogout);
  };
  //! SEARCH
  const dispatch = useDispatch();
  const { searchDatas } = useSelector((state) => state.search);
  const [searchInput, setSearchInput] = useState("");
  const handleOnSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleOnSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchingData(searchInput));
  };
  const handleDeleteInput = () => {
    setSearchInput("");
  };

  const scrollToCardProd = () => {
    window.scrollTo({
      top: 230,
      behavior: "smooth",
    });
  }

  //! AUTH
  const { logToken, userDatas } = useSelector((state) => state.auth);
  const firstLetter = userDatas.username
    ? userDatas.username.charAt(0).toUpperCase()
    : "";

  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="input-nav">
        <div className="inputs">
          <form action="" onChange={handleOnSearch}>
            <label htmlFor="select"></label>
            <input
              type="text"
              placeholder="Search on lenny..."
              value={searchInput}
              onChange={handleOnSearchChange}
            />
          </form>
        </div> 
        <div className="searchResults">
          {searchInput &&
            searchDatas?.data?.map(({ id, attributes }) => {
              return (
                <Link
                  onClick={handleDeleteInput}
                  className="link"
                  key={id}
                  to={`/productdetail/${id}`}
                >
                  <div className="searchResData" key={id}>
                    <img
                      src={`${import.meta.env.VITE_UPLOAD_IMAGE}${
                        attributes.image?.data[0].attributes.url
                      }`}
                      alt=""
                    />
                    <div className="searchDataTitle">
                      <h4>{attributes.title}</h4>
                      <h5>${attributes.price}</h5>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className="search-div">
          <CiSearch className="search" type="submit" onClick={handleOnSearch} />
        </div>
      </div>
      <div className="basket-user">
        <Link className="linkBasket" to="/shopcard" onClick={scrollToCardProd}>
          <img src={shoppingCart} className="basket" alt=""/>
        </Link>
        {
          cart.length > 0 ? <p className="productInCart">{cart.length}</p> : null
        }
        <img src={notification} className="notification" alt="" />
        {/* <img src={message} className="message" alt="" /> */}
        <Link className="link" to="/favourites">
        <BsHeartFill className="heartFav"/>
        </Link>
        
        <div className="borderHead"></div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {openSignIn && (
              <SignIn
                setOpen={setOpen}
                setopenSignIn={setopenSignIn}
                setOpenSignUp={setOpenSignUp}
              />
            )}
            {openSignUp && (
              <SignUp
                setOpenSuccess={setOpenSuccess}
                setOpenSignUp={setOpenSignUp}
                setopenSignIn={setopenSignIn}
                setOpen={setOpen}
              />
            )}
            {openSuccess && (
              <RegisterSuccess
                setopenSignIn={setopenSignIn}
                setOpenSuccess={setOpenSuccess}
              />
            )}
          </Box>
        </Modal>

        {logToken ? (
          <p className="userAvatar" onClick={handleOpenLogout}>
            {firstLetter}
          </p>
        ) : (
          <BiSolidUser className="user" onClick={handleOpen} />
        )}

        {openLogout && (
          <SignOut setOpenLogout={setOpenLogout} setOpen={setOpen} />
        )}
      </div>
    </div>
  );
};

export default Header;

//<img src={userPhoto} className='userPhoto' alt="" onClick={handleOpenLogout}/>
