import { GET_ARTICLES } from "./types";

const initialState = {
  articles: [],
  isLoading: true,
  articlesCount: 5,
  offset: 0,
};

export const fetchArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        articlesCount: action.articlesCount,
        isLoading: action.isLoading,
        offset: action.offset,
      };

    default:
      return state;
  }
};
