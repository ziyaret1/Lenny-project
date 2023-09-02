import React from 'react'
import './relevantProduct.scss'
import ProductCard from '../../../components/Product Cards/ProductCard'
import spyXshirt from '../../../assets/images/greenmanjacket.png'
import {PiStarFill} from 'react-icons/pi'
import {PiDotOutlineFill} from 'react-icons/pi'

const RelevantProducts = () => {
  return (
        <div className="relevantProducts-container">
          <div className="relevantProductList">
         <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
            <ProductCard prodImage={spyXshirt} prodName="Spy x Family Tshirt" prodAmount="$26" prodOwner="North Purwokerto" prodStar={<PiStarFill/>} prodPopularity="4,8" dotIcon={<PiDotOutlineFill/>} prodSold="1,238 Sold"/>
        </div>
        <div className="relevantProductPagination">
          
        </div>
        </div>
  )
}

export default RelevantProducts