import SearchTitle from './Search Title/SearchTitle'
import Breadcrumb from '../../layouts/Breadcrumb/Breadcrumb'
import FilterOption from './Filter option/FilterOption'
import RelevantProducts from './Relevant product/RelevantProducts'
import './searchResult.scss'
import { useParams } from 'react-router-dom'
import React from 'react'
import { getProductByCategoryId } from '../../api/product'
import { useState } from 'react'

const SearchResult = () => {
  let params = useParams()
  console.log(params.categoryId, 'params');

  const [categoryProduct, setcategoryProduct] = useState([])

  React.useEffect(() =>{
     async function getProdByCategId(){
      const data = await getProductByCategoryId(params.categoryId)
      setcategoryProduct(data)
     }
     getProdByCategId()
  }, [params.categoryId])
 console.log(categoryProduct, 'catProd');
  


  return (
    <div>
        <Breadcrumb/>
        <SearchTitle/>
        <div className="div">
        <FilterOption/>
        <RelevantProducts categoryProduct={categoryProduct}/>
        </div>
    </div>
  )
}

export default SearchResult