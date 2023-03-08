// import { v4 as uuid } from "uuid";

import { GET_ONE_ARTICLE } from "./types";

export const fetchOneArticle = (jsonData, isItLoading = true) => {
  return {
    type: GET_ONE_ARTICLE,
    article: jsonData.article,
    isLoading: isItLoading,
  };
};

export async function fetchOneArticleFunc(slug) {
  try {
    const response = await fetch(`https://blog.kata.academy/api/articles/${slug}`);
    if (response.status === 500) {
      throw new Error(`Error! Response status: ${response.status}`);
    }
    if (!response.ok) {
      throw new Error(
        `Error fetch URL https://blog.kata.academy/api/articles/${slug} Response status: ${response.status}`
      );
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
  // };
}

export function dispatchOneArticleFunc(slug) {
  return async (dispatch) => {
    const jsonData = await fetchOneArticleFunc(slug);
    // console.log("fetchOneArticle - jsonData >>> ", jsonData);
    dispatch(fetchOneArticle(jsonData, false));
  };
}
