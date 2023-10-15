import Breadcrumb from "../../layouts/Breadcrumb/Breadcrumb";
import DetailMenu from './Details Menu/DetailMenu'
import ProductSlider from "./Product Slider/ProductSlider";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

  const { productId } = useParams();

  return (
    <div>
      <Breadcrumb />
      <ProductSlider productId={productId} />
      <DetailMenu productId={productId}/>
    </div>
  );
};

export default ProductDetails;

