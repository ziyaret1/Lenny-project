import "./popularProduct.scss";
import ProductCard from "../../../components/Product Cards/ProductCard";
import { PiStarFill } from "react-icons/pi";
import { PiDotOutlineFill } from "react-icons/pi";
// import { getProducts } from "../../../api/product";
import React, { useState } from "react";
import { getLimitedProduct } from "../../../api/product";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  // React.useEffect(() => {
  //   async function getAllProduct() {
  //     const data2 = await getProducts();
  //     setProducts(data2);
  //   }
  //   getAllProduct();
  // }, []);

  console.log(products, "prod");

  const [limit, setLimit] = useState(Number(8));
 const [counter, setCounter] = useState(1);

React.useEffect(() =>{
  async function getAllLimit(){
    const data3 = await getLimitedProduct(limit)
    setProducts(data3)
  }
  getAllLimit()
  console.log(limit, 'limit');
}, [limit])

const changeLimit = () => {
 setLimit((prev) => prev + 8)
 setCounter((prev) => prev + 1)
}

  return (
    <div className="popularProduct-container">
      <div className="popProduct-header">
        <h1>Popular Product on Lenny</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
      </div> 
      <div className="popProductCards">
        <Link className="popProductCards" to="/productdetail">
          {products?.data?.map(({ id, attributes }) => {
          return (
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
          );
        })}
        </Link>
        
      </div>
      <div className="prodViewBtn"> {
        counter != 3 && counter < 3 && <button className="homeLoadMore" onClick={changeLimit}>Load more</button> 
      }
        
      </div>
    </div>
  );
};

export default PopularProduct;
