import React from 'react'
import './signIn.scss'
import { BiLogoFacebook } from 'react-icons/bi'

const SignIn = () => {
  return (
    <div className='signIn-container'>
        <div className="container-title">
            <h2>Sign In</h2>
        </div>
        <div className="containerInput">
            <form>
                <label htmlFor="">Phone Number or Email</label>
                <input type="text" placeholder='Enter your phone number or email'/>
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
            <button> <BiLogoFacebook className='facebookIcon'/> Sign In with Facebook </button>
        </div>
        </div>
    </div>
  )
}

export default SignIn