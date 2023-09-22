import './shoppingChart.scss'
import ChoicesProduct from "./Choices Product/ChoicesProduct"
import ShopChartTitle from "./ShopChart title/ShopChartTitle"
import CheckoutSummary from './Checkout Summary/CheckoutSummary'
import RelatedProduct from '../../components/Related Product/RelatedProduct'

const ShoppingChart = () => {
  return (
    <div>
        <ShopChartTitle/>
        <div className="choices-summary">
          <ChoicesProduct/>
          <CheckoutSummary/>
        </div>
        <RelatedProduct/>
    </div>
  )
}

export default ShoppingChart