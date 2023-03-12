import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignInButton from "../../../entities/SignInButton";
import SignUpButton from "../../../entities/SignUpButton";
import LogOutButton from "../../../entities/LogOutButton";
import ProfileInfo from "../../../features/ProfileInfo";
import * as actions from "../../../shared/api/actions_all";

import classes from "./Header.module.scss";

const Header = ({ checkLocalStorageCredentials, dispatchProfileUsernameFunc, username, image, isLoggedIn, logOut }) => {
  useEffect(() => {
    checkLocalStorageCredentials();
  }, []);

  useEffect(() => {
    dispatchProfileUsernameFunc();
  }, [username, image]);

  return (
    <div className={classes.header}>
      <Link to="/article/">
        <div>Realworld Blog</div>
      </Link>
      <div className={classes.headerRightSide}>
        {isLoggedIn ? (
          <>
            <ProfileInfo
              username={username}
              image={image}
            />{" "}
            <LogOutButton logOut={logOut} />
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <SignInButton />
            </Link>
            <Link to="/sign-up">
              <SignUpButton />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
  dispatchProfileUsernameFunc: state.profileUsernameReducer.dispatchProfileUsernameFunc,
  image: state.profileUsernameReducer.image,
  username: state.signInReducer.username,
  isLoggedIn: state.signInReducer.isLoggedIn,
});

export default connect(mapStateToProps, actions)(Header);
