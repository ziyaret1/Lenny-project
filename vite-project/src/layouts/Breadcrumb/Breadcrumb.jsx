import React from "react";
import "./breadcrumb.scss";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useLocation, useParams } from "react-router-dom";
import { getCategories } from "../../Redux/reducer/Categories/categoryThunk";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../api/product";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { productId } = useParams();
  const [singleProdee, setSingleProdee] = React.useState(null);
  React.useEffect(() => {
    const getSingleProd = async () => {
      const res = await getSingleProduct(productId);
      console.log(res.data, "prooo");
      setSingleProdee(res.data);
    };
    getSingleProd();
  }, [productId]);

  return (
    <div className="breadCrumb-container">
      <div>
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Home
        </Link>
        <span className="breadcrumb-arrow">
          <LiaAngleRightSolid />
        </span>
      </div>
      <div className="">
        {categories?.data?.map(({ id, attributes }) => {
          if (Number(params.categoryId) == id) {
            return (
              <Link
                key={id}
                className={
                  location.pathname === `/searchres/${id}`
                    ? "breadcrumb-active"
                    : "breadcrumb-not-active"
                }
              >
                {attributes.title}
              </Link>
            );
          }
        })}
      </div>
      <div>
        <Link
          key={productId}
          className={
            location.pathname === `/productdetail/${productId}`
              ? "breadcrumb-active"
              :"breadcrumb-not-active"
          }
        >
          {singleProdee?.attributes?.title}
        </Link>
      </div>
      <div>
        <Link
        to="/detailarticle"
          className={
            location.pathname === "/detailarticle"
              ? "breadcrumb-active"
              : "displayNone breadcrumb-not-active"
          }
        >
          Article Detail
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
