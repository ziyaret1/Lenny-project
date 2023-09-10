import HomeTitle from '../../pages/Home/Home title/HomeTitle'
import FeaturedCategory from '../../pages/Home/Featured Category/FeaturedCategory'
import PopularProduct from './Popular Product/PopularProduct'
import IpadAirGen from './Ipad Air Gen/IpadAirGen'
import LennyMiniArticle from './Lennys mini article/LennyMiniArticle'
import SignUp from '../../pages/Login/Sign Up/SignUp'


const Home = () => {
  return (
    <div>
        <HomeTitle/>
        <FeaturedCategory/>
        <PopularProduct/>
        <IpadAirGen/>
        <LennyMiniArticle/>
        <div className="">
          <SignUp/>
        </div>
        
    </div>
  )
}

export default Home