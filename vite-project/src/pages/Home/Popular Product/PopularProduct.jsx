import './popularProduct.scss'
import Buttons from '../../../components/Buttons/Buttons'
import ProductCard from '../../../components/Product Cards/ProductCard'
import spyXshirt from '../../../assets/images/greenmanjacket.png'
import {PiStarFill} from 'react-icons/pi'
import {PiDotOutlineFill} from 'react-icons/pi'

const PopularProduct = () => {
  return (
    <div className='popularProduct-container'>
        <div className="popProduct-header">
            <h1>Popular Product on Lenny</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
        </div>
        <div className="popProductCards">
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
        </div>
        <div className="prodViewBtn">
        <Buttons text="View More" textColor="#1E4C2F" color="white"/>
        </div>
    </div>
  )
}

export default PopularProduct