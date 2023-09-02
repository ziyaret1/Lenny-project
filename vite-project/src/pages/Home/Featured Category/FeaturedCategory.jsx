import './featuredCategory.scss'
import FeaturedCards from './FeaturedCards'
import Buttons from '../../../components/Buttons/Buttons'
import {BsPhoneFill} from 'react-icons/bs'
import {PiTShirtFill} from 'react-icons/pi'
import {PiAirplaneTiltFill} from 'react-icons/pi'
import {PiHeadphonesFill} from 'react-icons/pi'
import {PiBookFill} from 'react-icons/pi'
import {PiGameControllerFill} from 'react-icons/pi'


const FeaturedCategory = () => {
  return (
    <div className='featuredCategory-container'>
        <div className="features-head">
            <h1>Featured Category</h1>
            <Buttons text="View Detail" color="white" textColor="#1E4C2F"/>
        </div>
        <div className="features-footer">
    <FeaturedCards fIcon={<BsPhoneFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
    <FeaturedCards fIcon={<PiTShirtFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
    <FeaturedCards fIcon={<PiAirplaneTiltFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
    <FeaturedCards fIcon={<PiHeadphonesFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
    <FeaturedCards fIcon={<PiBookFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
    <FeaturedCards fIcon={<PiGameControllerFill className='iconSize'/>} fText="Electronics" fParag="8,9k products"/>
        </div>
        <div className="features-slider">
            
        </div>
    </div>
  )
}

export default FeaturedCategory