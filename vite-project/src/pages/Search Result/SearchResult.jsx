import SearchTitle from './Search Title/SearchTitle'
import Breadcrumb from '../../layouts/Breadcrumb/Breadcrumb'
import FilterOption from './Filter option/FilterOption'
import RelevantProducts from './Relevant product/RelevantProducts'
import './searchResult.scss'

const SearchResult = () => {

  return (
    <div>
        <Breadcrumb/>
        <SearchTitle/>
        <div className="div">
        <FilterOption/>
        <RelevantProducts/>
        </div>
    </div>
  )
}

export default SearchResult