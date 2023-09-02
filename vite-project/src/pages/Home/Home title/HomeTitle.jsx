import './homeTitle.scss'
import Buttons from '../../../components/Buttons/Buttons'
import {AiOutlineRight} from 'react-icons/ai'

const HomeTitle = () => {
  return (
    <div className='homeTitle-container'>
        <div className="header-left">
            <h1>Upgrade Your Wardrobe With Our Collection</h1>
            <p>Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est ullamcorper nisl amet non mollis.</p>
            <div className="header-buttons">
                <Buttons text="Buy Now" color="#1E4C2F" textColor="white"/>
                <Buttons text="View Details" color="white" textColor="#1E4C2F"/>
            </div>
        </div>
        <div className= "header-right" >
        <AiOutlineRight className='rightArrow'/>
        </div>
    </div>
  )
}

export default HomeTitle