import ArticleList from "./Article List/ArticleList"
import ArticleTitle from "./Article Title/ArticleTitle"
import PopularArticle from "./Popular Article/PopularArticle"

const Article = () => {
  return (
    <div>
      <ArticleTitle/>
      <PopularArticle/>
      <ArticleList/>
    </div>
  )
}

export default Article