import './signUp.scss'
import {BiLogoFacebook} from 'react-icons/bi'

const SignUp = () => {
  return (
    <div className="signUp-container">
        <div className="signUp-title">
            <h2>Sign Up</h2>
        </div>
        <div className="signUpInput">
        <form>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your phone name'/>
            </form>
            <form>
                <label htmlFor="">Phone Number or Email</label>
                <input type="text" placeholder='Enter your phone number or email'/>
            </form>
            <form>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter your password'/>
            </form>
            <span>Getting Trouble?</span>
        </div>
        <div className="signUpButtons">
            <div className="signUpbtn">
                <button>Sign Up</button>
                </div>
            <div className="methods">
            <div className="leftBorder"></div>
            <span>or using other method</span>
            <div className="rightBorder"></div>
        </div>
        <div className="signfacebookbtn">
            <button> <BiLogoFacebook className='facebookIcon'/> Sign In with Facebook </button>
        </div>
        </div>
    </div>
  )
}

export default SignUp