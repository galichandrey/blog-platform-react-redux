import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../../widgets/Header";
import ArticleList from "../../widgets/ArticleList";
import SignIn from "../../widgets/SignIn";
import SignUp from "../../widgets/SignUp";
import Article from "../../features/Article/ui/Article";
import Profile from "../../widgets/Profile";

import classes from "./app.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <Router>
        <Header />
        <div className={classes.main}>
          <Route
            path="/"
            component={ArticleList}
            exact
          />
          <Route
            path="/article/"
            component={ArticleList}
            exact
          />
          <Route
            path="/profile"
            component={Profile}
            exact
          />
          <Route
            path="/article/:slug"
            render={({ match }) => {
              // render={({ match, location, history }) => {
              const { slug } = match.params;
              return <Article slug={slug} />;
            }}
          />
          <Route
            path="/sign-in"
            component={SignIn}
            exact
          />
          <Route
            path="/sign-up"
            component={SignUp}
            exact
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
