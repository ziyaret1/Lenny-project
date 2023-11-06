import "./relatedProduct.scss";
import Buttons from "../Buttons/Buttons";
import ProductCard from "./../Product Cards/ProductCard";
import { PiStarFill } from "react-icons/pi";
import { PiDotOutlineFill } from "react-icons/pi";
import React, { useState } from "react";
import { getLimitedProduct } from "../../api/product";
import { Link } from "react-router-dom";
 
const RelatedProduct = () => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(Number(4));

  React.useEffect(() => {
    async function getAllLimit() {
      const data3 = await getLimitedProduct(limit);
      setProducts(data3);
    }
    getAllLimit();
  }, [limit]);

  return (
    <div className="relatedProduct-container">
      <div className="relatedProduct-title">
        <h3>Related Product</h3>
        <Buttons color="white" text="View Detail" textColor="#1E4C2F" />
      </div>
      <div className="productsList">
        {products?.data?.map(({ id, attributes }) => {
          return (
            <Link className="productsList" key={id} to={`/productdetail/${id}`}>
              <ProductCard
                key={id}
                prodImage={attributes?.image?.data[0]?.attributes?.url}
                prodName={attributes?.title}
                prodAmount={"$" + attributes?.price}
                prodOwner="North Purwokerto"
                prodStar={<PiStarFill />}
                prodPopularity={attributes?.rating}
                dotIcon={<PiDotOutlineFill />}
                prodSold="1,238 Sold"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
