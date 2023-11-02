import React from "react";
import "./signUp.scss";
import {BiErrorAlt} from 'react-icons/bi'
import { BiLogoFacebook } from "react-icons/bi";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { fetchAuthRegister } from "../../../Redux/reducer/Auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const SignUp = ({setOpenSuccess,  setOpenSignUp, setopenSignIn}) => {
  // const {jwtToken} = useSelector((state) => state.auth)
  // const [seePassword, setSeePassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch(); 
   
  const { jwtToken, resError} = useSelector((state) => state.auth)
  const [hasToken, setHasToken] = React.useState(false); // Local state variable
  const [haveResError, setHaveResError] = React.useState(false);

  console.log(hasToken, 'ujassssssssssssssss');
  console.log(jwtToken, 'jwtToooken');


  const [regDatas, setRegDatas] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(regDatas);

  const handleOnSubmit = (e) => { 
    e.preventDefault();
    dispatch(fetchAuthRegister(regDatas));
    if (resError) {
      setHaveResError(true);
    } else {
      setHaveResError(false);
    }
  }

  //! FIRST WAY (which gives some error)
  // React.useEffect(() => {
  //   if (jwtToken) {
  //     setHasToken(true);
  //   }
  // }, [jwtToken]);
  // if (hasToken) {
  //   setOpenSignUp(false);
  //   setOpenSuccess(true);
  // }

  //! SECOND WAY (gpt offer)
  React.useEffect(() => {
    if (jwtToken) {
      setHasToken(true);
    }
  }, [jwtToken]);
  React.useEffect(() => {
    if (hasToken) {
      setOpenSignUp(false);
      setOpenSuccess(true);
    }
  }, [hasToken, setOpenSignUp, setOpenSuccess]);

  const handleChangeValue = (e) => {
    setRegDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOpenHaveAccount = () => {
    setOpenSignUp(false)
    setopenSignIn(true)
  }

  return (
    <div className="signUp-container">
      <div className="signUp-title">
        <h2>Sign Up</h2>
      </div>
      <div className="signUpInput">
          {haveResError ? (
         <p className="warningErrorRegister">
         <BiErrorAlt className="errorIcon"/>
       The email address is unavailable. Please try another email address.!
           </p>
        ) : null}
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={regDatas.name}
            onChange={handleChangeValue}
          />
          <label htmlFor="">Phone Number or Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your phone number or email"
            value={regDatas.email}
            onChange={handleChangeValue}
          />
          <label htmlFor="">Password</label>
          <div className="passwordInpt">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={regDatas.password}
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
          {/* <div className="genderInput">
      <h4>Gender Selection</h4>
      <label>
        <input
          type="radio"
          name="male"
          value={regDatas.male}
            onChange={handleChangeValue}
          // value="male"
          checked={regDatas.male === 'male'}
          // onChange={handleGenderChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="female"
          value={regDatas.female}
          onChange={handleChangeValue}
        />
        Female
      </label>
      </div> */}
        </form>
        <span onClick={handleOpenHaveAccount}>Have an account?</span>
      </div>
      <div className="signUpButtons">
        <div className="signUpbtn">
          <button type="submit" onClick={handleOnSubmit}>
            Sign Up
          </button>
        </div>
        <div className="methods">
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

export default SignUp;
