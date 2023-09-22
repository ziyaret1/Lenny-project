import { Routes, Route } from "react-router-dom"
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"
import Home from "../pages/Home/Home"
import SearchResult from "../pages/Search Result/SearchResult"
import ProductDetail from "../pages/Product Detail/ProductDetails"
import ShoppingChart from "../pages/Shopping Chart/ShoppingChart"
import Article from "../pages/Article/Article"
import DetailArticle from "../pages/Detail Article/DetailArticle"

function Routers() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchres" element={<SearchResult />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/shopcard" element={<ShoppingChart />} />
        <Route path="/article" element={<Article />} />
        <Route path="/detailarticle" element={<DetailArticle/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
