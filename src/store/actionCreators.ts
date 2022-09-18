import { ArticleAction, DispatchType, IArticle } from "../type";
import * as actionTypes from "./actionTypes";

export function addArticles(article:IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLES,
        article,
    }
    return simulateHttpRequest(action)
}

export function removeArticles(article:IArticle) {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLES,
        article,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 5000);
    }
}
