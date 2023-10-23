import React from "react";
import "./breadcrumb.scss";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useLocation, useParams } from "react-router-dom";
import { getCategories } from "../../Redux/reducer/Categories/categoryThunk";
import { useDispatch, useSelector } from "react-redux";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams()

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
      <div>
        {categories?.data?.map(({ id, attributes }) => {
          if(Number(params.categoryId) == id){
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
          }
          )}
      </div>


      {/* <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/searchres"
        className={location.pathname.startsWith("/searchres") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Search Result
      </Link> */}
      {/* <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/productdetail/:productId"
        className={location.pathname.startsWith("/productdetail/:productId") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Product Detail
      </Link> */}
      {/* <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/detailarticle"
        className={location.pathname === "/detailarticle" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
      Article Detail
      </Link> */}
    </div>
  );
};

export default Breadcrumb;

//! MIU BREADCRUMBS
// import * as React from 'react';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// function handleClick(e) {
//   e.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// const Breadcrumb = () => {
//   const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" onClick={handleClick}>
//       Home
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Search Result
//     </Link>,
//     <Typography key="3" color="text.primary">
//       Breadcrumb
//     </Typography>,
//   ];

//   return (
//     <Stack spacing={2}>
//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Stack>
//   );
// }

// export default Breadcrumb
