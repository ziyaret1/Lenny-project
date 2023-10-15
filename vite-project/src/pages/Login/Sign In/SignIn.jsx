import "./signIn.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import React from "react";

const SignIn = () => {
  const [seePassword, setSeePassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signIn-container">
      <div className="container-title">
        <h2>Sign In</h2>
      </div>
      <div className="containerInput">
        <form>
          <label htmlFor="">Phone Number or Email</label>
          <input type="email" placeholder="Enter your phone number or email" />
          <label htmlFor="">Password</label>
          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={seePassword}
              onChange={(e) => setSeePassword(e.target.value)}
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
        <span>Getting Trouble?</span>
      </div>
      <div className="containerButtons">
        <div className="signinbtn">
          <button>Sign In</button>
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
