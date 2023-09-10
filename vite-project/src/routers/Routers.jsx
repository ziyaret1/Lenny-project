import { Routes, Route} from "react-router-dom"
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Home from "../pages/Home/Home";
import SearchResult from "../pages/Search Result/SearchResult";
import ProductDetail from '../pages/Product Detail/ProductDetails'
import ShoppingCard from '../pages/Shopping Card/ShoppingCard'
import Article from '../pages/Article/Article'

const Routers = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchres" element={<SearchResult />} />
          <Route path="/productdetail" element={<ProductDetail/>}/>
          <Route path="/shoppingcard" element={<ShoppingCard/>}/>
          <Route path="/article" element={<Article/>}/>
        </Routes>
      <Footer />
      </>
  );
};

export default Routers;
