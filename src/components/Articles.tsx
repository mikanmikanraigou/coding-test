import * as React from "react"
import { Dispatch } from "redux";
import { useDispatch } from "react-redux"
import { IArticle } from "../type"


type Props = {
    article: IArticle
    removeArticles: (article: IArticle) => void    
}

export const Article: React.FC<Props> = ({article, removeArticles}) => {
    const dispatch: Dispatch<any> = useDispatch()
    
    const deleteArticle = React.useCallback(
        (article:IArticle) => dispatch(removeArticles(article)),
        [dispatch, removeArticles]
    )

    return(
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <p>{article.image}</p>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    )
}