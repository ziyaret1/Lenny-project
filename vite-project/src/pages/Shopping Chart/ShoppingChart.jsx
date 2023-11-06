import "./shoppingChart.scss";
import ChoicesProduct from "./Choices Product/ChoicesProduct";
import ShopChartTitle from "./ShopChart title/ShopChartTitle";
import CheckoutSummary from "./Checkout Summary/CheckoutSummary";
import RelatedProduct from "../../components/Related Product/RelatedProduct";
import NoProductSelected from "./No product Selected/NoProductSelected";
import { useSelector } from "react-redux";

const ShoppingChart = () => {
  const { cart } = useSelector((state) => state.shopCard);
  return (
    <div>
      {cart.length == 0 && <NoProductSelected />}
      {cart.length !== 0 && (
        <>
          <ShopChartTitle />
          <div className="choices-summary">
            <ChoicesProduct />
            <CheckoutSummary />
          </div>
        </>
      )}
      <RelatedProduct />
    </div>
  );
};

export default ShoppingChart;
