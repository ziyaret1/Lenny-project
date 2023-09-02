import './searchTitle.scss'
import {PiGridFourFill} from 'react-icons/pi'
import {RxHamburgerMenu} from 'react-icons/rx'


const SearchTitle = () => {
  return (
    <div className='searchTitle-container'>
         <div className="showingProd-amounts">
            <h1>Showing product for “Gaming Gear”</h1>
            <p>Showing 1 - 60 Products</p>
        </div>
        <div className="sortBy-cont">
            <span>Sort By:</span>
                <select name="" id="">
                    <option className='option' value="relevand">Relevant Products</option>
                    <option className='option' value="relevand">Relevant Products</option>
                    <option className='option' value="relevand">Relevant Products</option>
                </select>
            <PiGridFourFill className='gridIcon'/>
            <RxHamburgerMenu className='hamburgIcon'/>    
        </div>
    </div>
  )
}

export default SearchTitle