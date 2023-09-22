import './shopChartTitle.scss'

const ShopChartTitle = () => {
  return (
    <div className='shopChartTitle-container'>
         <div className="cardHead-title">
            <h2>Shopping Chart</h2>
            <p>Showing your choices product</p>
        </div>
        <div className="cardSortBy">
            <span>Sort By:</span>
                <select name="" id="">
                    <option className='option' value="relevand">Latest Added</option>
                    <option className='option' value="relevand">Latest Added</option>
                    <option className='option' value="relevand">Latest Added</option>
                </select> 
        </div>
    </div>
  )
}

export default ShopChartTitle