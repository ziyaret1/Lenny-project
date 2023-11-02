import './unseccessful.scss'
import {FaTimes} from 'react-icons/fa'

const Unsuccessful = () => {
  return (
    <div className='unsuccessful-container'>
        <div className="unsuccessIcon">
            <FaTimes className='notDoneIcon'/>
        </div>
            <div className="unsuccessRes">
                <h3>Account Creation Failed!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad obcaecati ab.</p>
            <button className='unsuccessButton'>Sign In</button>
            <button className='unsuccessButtonForUp'>Sign Up</button>
            </div>
    </div>
  )
}

export default Unsuccessful