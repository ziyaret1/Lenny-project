import './registerSuccess.scss'
import {PiCheckBold} from 'react-icons/pi'

const RegisterSuccess = ({setopenSignIn, setOpenSuccess}) => {

  const handleGoLogin = () => {
    setopenSignIn(true)
    setOpenSuccess(false)
  }
  
  return (
    <div className='registerSuccess-container'>
        <div className="successIcon">
            <PiCheckBold className='doneIcon'/>
        </div>
            <div className="successRes">
                <h3>Create Account Successfull!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad obcaecati ab.</p>
            <button className='successButton' onClick={handleGoLogin}>Sign In</button>
            </div>
    </div>
  )
}

export default RegisterSuccess