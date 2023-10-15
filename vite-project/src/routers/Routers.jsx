import { Routes, Route } from "react-router-dom"
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"
import Home from "../pages/Home/Home"
import SearchResult from "../pages/Search Result/SearchResult"
import ProductDetail from "../pages/Product Detail/ProductDetails"
import ShoppingChart from "../pages/Shopping Chart/ShoppingChart"
import Article from "../pages/Article/Article"
import DetailArticle from "../pages/Detail Article/DetailArticle"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RegisterSuccess from '../pages/Login/Register success/RegisterSuccess'
import SignIn from '../pages/Login/Sign In/SignIn';
import SignOut from '../layouts/Sign Out/SignOut'
import SignUp from "../pages/Login/Sign Up/SignUp"
import PublicLayouts from "../layouts/PublicLayouts"
import ProtectedLayouts from "../layouts/ProtectedLayouts"

function Routers() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<PublicLayouts/>}>
        <Route path="/" element={<Home />} />
        </Route>
        <Route path="/searchres/:categoryId" element={<SearchResult />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/shopcard" element={<ShoppingChart />} />
        <Route path="/article" element={<Article />} />
        <Route path="/detailarticle" element={<DetailArticle/>}/>
        <Route element={<ProtectedLayouts/>}>
                  <Route path="register" element={<SignUp/>}/>
        </Route>
        <Route path="/success" element={<RegisterSuccess/>}/>
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="signOut" element={<SignOut/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
