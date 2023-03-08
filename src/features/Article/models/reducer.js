import { GET_ONE_ARTICLE } from "./types";

const initialState = {
  article: [],
  isLoading: true,
};

export const fetchOneArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE:
      return {
        ...state,
        article: action.article,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
