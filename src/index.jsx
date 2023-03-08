import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { compose, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import App from "./app";
import { fetchArticlesReducer, fetchOneArticleReducer } from "./shared/api/reducers_all";
const rootReducer = combineReducers({
  fetchArticlesReducer,
  fetchOneArticleReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
