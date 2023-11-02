import "./signIn.scss";
import React, { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthLogin } from "../../../Redux/reducer/Auth/authThunk";
import { BiErrorAlt } from 'react-icons/bi'
// import PropagateLoader from "react-spinners/PropagateLoader";
// <PropagateLoader className="loading" color="#1E4C2F" />

const SignIn = ({ setopenSignIn, setOpenSignUp, setOpen }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const { logToken, logError } = useSelector((state) => state.auth);

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
  const [hasLogToken, setHasLogToken] = useState(false);
  const [haveError, setHaveError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthLogin(logData));
    if (logError) {
      setHaveError(true);
    } else {
      setHaveError(false);
    }
  };

  console.log(logError, "hasLogERROR");

  React.useEffect(() => {
    if (logToken) {
      setHasLogToken(true);
    }
  }, [logToken]);
  React.useEffect(() => {
    if (hasLogToken) {
      setopenSignIn(false);
      setOpen(false);
    }
  }, [hasLogToken, setOpen, setOpenSignUp, setopenSignIn]);

  const handleCloseSignIn = () => {
    setopenSignIn(false);
    setOpenSignUp(true);
  };

  return (
    <div className="signIn-container">
      <div className="container-title">
        <h2>Sign In</h2>
      </div>
      <div className="containerInput">
        {haveError ? (
          <p className="warningForError">
            <BiErrorAlt className="errorIcon"/>
            Your email address or password is incorrect!
          </p>
        ) : null}
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
      </div>
      <div className="containerButtons">
        <div className="signinbtn">
          <button type="submit" onClick={handleOnSubmit}>
            Sign In
          </button>
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
