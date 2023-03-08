import React from "react";
import { Link } from "react-router-dom";

import SignInButton from "../../entities/SignInButton/SignInButton";
import SignUpButton from "../../entities/SignUpButton/SignUpButton";

// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import classes from "./Header.module.scss";

const Header = () => (
  <div className={classes.header}>
    <Link to="/article/">
      <div>Realworld Blog</div>
    </Link>
    <div className={classes.headerRightSide}>
      <Link to="/sing-in/">
        <SignInButton />
      </Link>
      <Link to="/sing-up/">
        <SignUpButton />
      </Link>
    </div>
  </div>
);

// Header.propTypes = {
//   // bla: PropTypes.string,
// };

// Header.defaultProps = {
//   // bla: 'test',
// };

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default Header;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Header);
