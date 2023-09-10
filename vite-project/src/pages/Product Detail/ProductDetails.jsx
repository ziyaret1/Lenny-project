import RelatedProduct from '../../components/Related Product/RelatedProduct'
import ShowRoute from '../../layouts/Showing Route way/ShowRoute'
import DetailProduct from './Detail Product/DetailProduct'
import DetailMenu from './Details Menu/DetailMenu'
import MerchantInfo from './Merchant Information/MerchantInfo'
import ProductReviews from './Product Reviews/ProductReviews'


const ProductDetails = () => {

  return (
    <div>
        <ShowRoute/>
        <DetailMenu/>
        <DetailProduct/>
        <MerchantInfo/>
        <ProductReviews/>
        <RelatedProduct/>
    </div>
  )
}

export default ProductDetails


