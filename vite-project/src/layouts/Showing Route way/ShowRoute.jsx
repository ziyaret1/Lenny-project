import './showRoute.scss'
import {PiCaretRightBold} from 'react-icons/pi'

const ShowRoute = () => {
  return (
    <div className='showRoute-container'>
    <p className='greenP'>Home</p>
    <PiCaretRightBold className='arrowRight'/>
    <p className='greenP'>Electronic</p>
    <PiCaretRightBold className='arrowRight'/>
    <p>Gaming Gear</p>
</div>
  )
}

export default ShowRoute