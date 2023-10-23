import "./signIn.scss";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { fetchAuthLogin } from "../../../Redux/reducer/Auth/authThunk";

//!modal
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import SignUp from '../Sign Up/SignUp'
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 'auto',
//   bgcolor: 'background.paper',
//   border: 'none',
//   borderRadius: '8px',
//   boxShadow: 'none',
//   p: 0,
//   outline: 'none'
// };

 const SignIn = ({setopenSignIn, setOpenSignUp}) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const [logData, setLogData] = React.useState({
    identifier: "",
    password: "",
  });

  const handleChangeValue = (e) => {
    setLogData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const navigation = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthLogin(logData))
  };

  // const [open, setOpen] = React.useState(false);
  const handleCloseSignIn = () => {
   setopenSignIn(false)
   setOpenSignUp(true)
  }
  // const handleClose = () => setOpen(false);

  return (
    <div className="signIn-container">
      <div className="container-title">
        <h2>Sign In</h2>
      </div>
      <div className="containerInput">
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="">Phone Number or Email</label>
          <input
            type="email"
            name="identifier"
            value={logData.identifier}
            placeholder="Enter your phone number or email"
            onChange={handleChangeValue}
          />
          <label htmlFor="">Password</label>
          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={logData.password}
              name="password"
              onChange={handleChangeValue}
            />
            <span
              className={`toggle-password ${showPassword ? "show" : ""}`}
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <PiEye className="passIcon" />
              ) : (
                <PiEyeSlash className="passIcon" />
              )}
            </span>
          </div>
        </form>
        <span onClick={handleCloseSignIn}>{"Don't have an account?"}</span>
        {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignUp/>
        </Box>
      </Modal> */}
      </div>
      <div className="containerButtons">
        <div className="signinbtn">
          <button type="submit" onClick={handleOnSubmit}>Sign In</button>
        </div>
        <div className="otherMethod">
          <div className="leftBorder"></div>
          <span>or using other method</span>
          <div className="rightBorder"></div>
        </div>
        <div className="signfacebookbtn">
          <button>
            {" "}
            <BiLogoFacebook className="facebookIcon" /> Sign In with Facebook{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
