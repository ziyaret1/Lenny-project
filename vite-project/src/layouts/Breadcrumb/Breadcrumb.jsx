import './breadcrumb.scss'
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {

  const location = useLocation();
  return (
    <div className='breadCrumb-container'>
    <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/searchres"
        className={location.pathname.startsWith("/searchres") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Search Result
      </Link>
      <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/productdetail/:productId"
        className={location.pathname === "/productdetail/:productId" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Product Detail
      </Link>
      {/* <span className="breadcrumb-arrow"><LiaAngleRightSolid/></span>
      <Link to="/detailarticle"
        className={location.pathname === "/detailarticle" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
      Article Detail
      </Link> */}

</div>
  )
}

export default Breadcrumb
