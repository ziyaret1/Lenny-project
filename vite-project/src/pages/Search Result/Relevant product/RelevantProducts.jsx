import "./relevantProduct.scss";
import ProductCard from "../../../components/Product Cards/ProductCard";
import { PiDotOutlineFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { getProdbyCategoryId } from "../../../Redux/reducer/Categories/categoryThunk";
import React from 'react'
import { setCurrentPage } from "../../../Redux/reducer/Categories/categoryReducer";
// import { getFilteredProduct } from "../../../Redux/reducer/Categories/categoryThunk";

const RelevantProducts = () => {

  const params = useParams() 
  const dispatch = useDispatch()
  const {categoryProd, currentPage, filterObj} = useSelector((state) => state.categories)


  console.log({...filterObj}, categoryProd, 'filterObj');

  React.useEffect(() => {
    dispatch(getProdbyCategoryId({ 
      id: params.categoryId,
      page: currentPage,
      color: filterObj.color
    }))
    // dispatch(getFilteredProduct({
    //   color: filterObj.color,
    //   id: params.categoryId,
    //   page: currentPage
    // }))
  }, [currentPage, dispatch, filterObj, params.categoryId])

  const handleChangePage = (e, p) => {
    dispatch(setCurrentPage(p))
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);


  return (
    <div className="relevantProducts-container">
      <div className="relevantProductList">
        {
          categoryProd?.data?.map((product) => {
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
      <div className="relevantProductPagination">
      <Stack spacing={2}>
      <Pagination count={categoryProd?.meta?.pagination?.pageCount} onChange={handleChangePage} variant="outlined" shape="rounded" />
    </Stack>
      </div>
    </div>
  );
};

export default RelevantProducts;
