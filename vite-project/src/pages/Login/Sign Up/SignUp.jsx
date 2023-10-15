import React from "react";
import "./signUp.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { fetchAuthRegister } from "../../../Redux/reducer/Auth/authThunk";
import { useDispatch } from "react-redux";

const SignUp = () => {
  // const {jwtToken} = useSelector((state) => state.auth)
  // const [seePassword, setSeePassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const [regDatas, setRegDatas] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(regDatas);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthRegister(regDatas));
    console.log("clicked");
  };

  const handleChangeValue = (e) => {
    setRegDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="signUp-container">
      <div className="signUp-title">
        <h2>Sign Up</h2>
      </div>
      <div className="signUpInput">
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
        </form>
        <span>Getting Trouble?</span>
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
