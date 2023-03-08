// import { v4 as uuid } from "uuid";

import { GET_ARTICLES } from "../../../shared/api/types";

export const fetchArticles = (jsonData, offset = 0, isItLoading = true) => {
  return {
    type: GET_ARTICLES,
    articles: jsonData.articles,
    articlesCount: jsonData.articlesCount,
    isLoading: isItLoading,
    offset,
  };
};

export async function fetchArticlesFunc(offset) {
  // return async (dispatch, getState) => {
  // const state = getState();
  // const { offset } = state.fetchTicketsReducer;
  // console.log(offset);
  // console.log(state);
  try {
    const response = await fetch(`https://blog.kata.academy/api/articles?limit=5&offset=${offset}`);
    if (response.status === 500) {
      throw new Error(`Error! Response status: ${response.status}`);
    }
    if (!response.ok) {
      throw new Error(`Error fetch URL https://blog.kata.academy/api/articles Response status: ${response.status}`);
    }

    const jsonData = await response.json();
    // dispatchArticlesFunc(jsonData, offset);
    // dispatch(fetchArticles(jsonData, offset, false));
    return jsonData;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
  // };
}

export function dispatchArticlesFunc(offset = 0) {
  return async (dispatch) => {
    const jsonData = await fetchArticlesFunc(offset);
    // console.log("jsonData >>> ", jsonData);
    dispatch(fetchArticles(jsonData, offset, false));
  };
}

// const fetchAllTickets = (jsonData, isItLoading = true) => {
//   return {
//     type: GET_TICKETS,
//     tickets: jsonData,
//     isLoading: isItLoading,
//   };
// };

// export async function getSearchId() {
//   const searchIdRaw = await fetch("https://aviasales-test-api.kata.academy/search");
//   const searchId = await searchIdRaw.json();
//   return searchId.searchId;
// }

// export function getTickets() {
//   return async (dispatch, getState) => {
//     console.log("getState() >>> ", getState());
//     let searchId;
//     try {
//       searchId = await getSearchId();
//     } catch (e) {
//       throw new Error(`Error: ${e}`);
//     }
//     if (searchId === undefined) return;
//     const allTicketsArray = [];
//     let stopAll = false;

//     while (!stopAll) {
//       console.log("Мы ещё запускаем цикл!");
//       try {
//         const { tickets, stop } = await fetchArticles(searchId);
//         stopAll = stop;
//         const ticketsWithUUID = tickets.map((element) => {
//           return {
//             ...element,
//             uuID: uuid(),
//           };
//         });
//         if (allTicketsArray.length === 0) {
//           dispatch(fetchAllTickets(ticketsWithUUID));
//         }
//         allTicketsArray.push(...ticketsWithUUID);
//         console.log("Нету stop, шлём на сервер ещё один запрос");
//       } catch (e) {
//         if (e.name === "SyntaxError") {
//           throw new Error(`SyntaxError: ${e}`);
//         }
//       }
//     }
//     dispatch(fetchAllTickets(allTicketsArray, false));
//     console.warn("Вы вышли из цикла! stopAll >>>", stopAll);
//   };
// }
