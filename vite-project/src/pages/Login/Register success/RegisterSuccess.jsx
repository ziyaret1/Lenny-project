import './registerSuccess.scss'
import {PiCheckBold} from 'react-icons/pi'

const RegisterSuccess = () => {
  return (
    <div className='registerSuccess-container'>
        <div className="successIcon">
            <PiCheckBold className='doneIcon'/>
        </div>
            <div className="successRes">
                <h3>Create Account Successfull!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad obcaecati ab.</p>
            <button className='successButton'>Sign In</button>
            </div>
            
    </div>
  )
}

export default RegisterSuccess