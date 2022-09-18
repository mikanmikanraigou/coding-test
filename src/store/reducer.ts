import { ArticleAction, ArticleState, IArticle } from "../type";
import * as actionTypes from "./actionTypes";


const initialState: ArticleState = {
    articles: [
        {   id: 1, 
            title: 'Article 1',
            body: 'let this be the test body of article 1',
            image: '',
            imageUrl: '',
            imageName: '',
        },
        {   id: 2, 
            title: 'Article 2',
            body: 'This is the body of article 2',
            image: '',
            imageUrl: '',
            imageName: '',
        },
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLES:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
                image: action.article.image,
                imageUrl: action.article.imageUrl,
                imageName: action.article.imageName
            }
            return{
                ...state,
                articles: state.articles.concat(newArticle),
            }
            break;
        case actionTypes.REMOVE_ARTICLES:
            const updateArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return{
                ...state,
                articles: updateArticles
            }
    }
    return state

}
export default reducer