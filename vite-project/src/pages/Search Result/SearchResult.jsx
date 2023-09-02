import React from 'react'
import SearchTitle from './Search Title/SearchTitle'
import ShowRoute from '../../layouts/Showing Route way/ShowRoute'
import FilterOption from './Filter option/FilterOption'
import RelevantProducts from './Relevant product/RelevantProducts'
import './searchResult.scss'

const SearchResult = () => {
  return (
    <div>
        <ShowRoute/>
        <SearchTitle/>
        <div className="div">
        <FilterOption/>
        <RelevantProducts/>
        </div>
    </div>
  )
}

export default SearchResult