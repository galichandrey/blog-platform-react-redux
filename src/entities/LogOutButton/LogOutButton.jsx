import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
//import { Test } from './SignUpButton.styles';

import classes from "./LogOutButton.module.scss";

// eslint-disable-next-line prettier/prettier
const LogOutButton = ({ logOut }) => (
  <button
    className={classes.logOutButton}
    onClick={logOut}
  >
    Log Out
  </button>
);

// SignUpButton.propTypes = {
//   // bla: PropTypes.string,
// };

// SignUpButton.defaultProps = {
//   // bla: 'test',
// };

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SignUpButton);

export default LogOutButton;
