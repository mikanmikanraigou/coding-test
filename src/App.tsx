import * as React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AddArticle } from "./components/AddArcticles";
import { addArticles, removeArticles } from "./store/actionCreators";
import { ArticleState, IArticle } from "./type";
import { Dispatch } from "redux";
import { Article } from "./components/Articles";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticles = React.useCallback(
    (article: IArticle) => dispatch(addArticles(article)),
    [dispatch]
  )

  return(
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticles={saveArticles} />
      {articles.map((article: IArticle) => (
        <Article 
          key={article.id}
          article={article}
          removeArticles={removeArticles}
        />
      ))}
    </main>
  )
}

export default App;
