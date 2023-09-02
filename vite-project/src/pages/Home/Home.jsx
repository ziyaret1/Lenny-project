import HomeTitle from './Home title/HomeTitle'
import FeaturedCategory from './Featured Category/FeaturedCategory'
import PopularProduct from './Popular Product/PopularProduct'
import IpadAirGen from './Ipad Air Gen/IpadAirGen'
import LennyMiniArticle from './Lennys mini article/LennyMiniArticle'

const Home = () => {
  return (
    <div>
        <HomeTitle/>
        <FeaturedCategory/>
        <PopularProduct/>
        <IpadAirGen/>
        <LennyMiniArticle/>
    </div>
  )
}

export default Home