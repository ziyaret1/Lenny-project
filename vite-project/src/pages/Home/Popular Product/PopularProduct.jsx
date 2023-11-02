import "./popularProduct.scss";
import ProductCard from "../../../components/Product Cards/ProductCard";
import { PiStarFill } from "react-icons/pi";
import { PiDotOutlineFill } from "react-icons/pi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getLimitedProductThunk } from "../../../Redux/reducer/Products/productsThunk";
import PropagateLoader from "react-spinners/PropagateLoader";

const PopularProduct = () => {
  const [loading, setLoading] = useState(false);

  const [limit, setLimit] = React.useState(8);
  const [counter, setCounter] = React.useState(1);

  const changeLimit = () => {
    setLimit((prev) => prev + 8);
    setCounter((prev) => prev + 1);
  };

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  React.useEffect(() => {
    setLoading(true);
    dispatch(getLimitedProductThunk(limit));
    setLoading(false);
  }, [limit, dispatch]);

  console.log(products, "limitedProd");

  return (
    <div className="popularProduct-container">
      <div className="popProduct-header">
        <h1>Popular Product on Lenny</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
      </div>
      <div className="popProductCards">
        {loading ? (
          <PropagateLoader className="loading" color="#1E4C2F" />
        ) : (
          products?.map((products) => {
            return (
              <Link
                key={products.id}
                className="popProductCards"
                to={`/productdetail/${products.id}`}
              >
                <ProductCard
                  prodImage={
                    products?.attributes?.image?.data[0]?.attributes?.url
                  }
                  prodName={products?.attributes?.title}
                  prodAmount={"$" + products?.attributes?.price}
                  prodOwner="North Purwokerto"
                  prodStar={<PiStarFill />}
                  prodPopularity={products?.attributes.rating}
                  dotIcon={<PiDotOutlineFill />}
                  prodSold="1,238 Sold"
                />
              </Link>
            );
          })
        )}
      </div>
      <div className="prodViewBtn">
        {" "}
        {counter < 3 && (
          <button className="homeLoadMore" onClick={changeLimit}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default PopularProduct;
