import "./relevantProduct.scss";
import ProductCard from "../../../components/Product Cards/ProductCard";
import { PiDotOutlineFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
const RelevantProducts = ({ categoryProduct }) => {
  
  console.log(categoryProduct, "catprodLog");

  return (
    <div className="relevantProducts-container">
      <div className="relevantProductList">
        {
          // eslint-disable-next-line react/prop-types
          categoryProduct?.data?.map((product) => {
            return (
              <Link
                className="relevantProductList"
                key={product.id}
                to={`/productdetail/${product.id}`}
              >
                <ProductCard
                  prodImage={
                    product?.attributes?.image?.data[0]?.attributes?.url
                  }
                  prodName={product?.attributes?.title}
                  prodAmount={"$" + product?.attributes?.price}
                  prodOwner="North Purwokerto"
                  prodStar={<PiStarFill />}
                  prodPopularity="4,8"
                  dotIcon={<PiDotOutlineFill />}
                  prodSold="1,238 Sold"
                />
              </Link>
            );
          })
        }
      </div>
      <div className="relevantProductPagination"></div>
    </div>
  );
};

export default RelevantProducts;
