import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
//import { Test } from './SignInButton.styles';

import classes from "./SignInButton.module.scss";

// eslint-disable-next-line prettier/prettier
const SignInButton = () => (
  <div className={classes.signInButton}>Sign In</div>
);

// SignInButton.propTypes = {
//   // bla: PropTypes.string,
// };

// SignInButton.defaultProps = {
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
// )(SignInButton);

export default SignInButton;
