import './relatedProduct.scss'
import Buttons from '../Buttons/Buttons'
import ProductCard from './../Product Cards/ProductCard'
import spyXshirt from '../../assets/images/greenmanjacket.png'
import {PiStarFill} from 'react-icons/pi'
import {PiDotOutlineFill} from 'react-icons/pi'

const RelatedProduct = () => {
  return (
    <div className='relatedProduct-container'>
        <div className="relatedProduct-title">
            <h3>Related Product</h3>
            <Buttons color="white" text="View Detail" textColor="#1E4C2F"/>
        </div>
        <div className="productsList">
        <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
        </div>
    </div>
  )
}

export default RelatedProduct