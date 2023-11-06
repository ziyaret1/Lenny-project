import { Routes, Route } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Home from "../pages/Home/Home";
import SearchResult from "../pages/Search Result/SearchResult";
import ProductDetail from "../pages/Product Detail/ProductDetails";
import ShoppingChart from "../pages/Shopping Chart/ShoppingChart";
import Article from "../pages/Article/Article";
import DetailArticle from "../pages/Detail Article/DetailArticle";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "../pages/Login/Sign Up/SignUp";

function Routers() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchres/:categoryId" element={<SearchResult />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/shopcard" element={<ShoppingChart />} />
        <Route path="/article" element={<Article />} />
        <Route path="/detailarticle" element={<DetailArticle />} />
        <Route path="register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
