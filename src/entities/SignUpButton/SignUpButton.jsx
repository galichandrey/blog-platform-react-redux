import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
//import { Test } from './SignUpButton.styles';

import classes from "./SignUpButton.module.scss";

// eslint-disable-next-line prettier/prettier
const SignUpButton = () => (
  <button className={classes.signUpButton}>Sign Up</button>
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

export default SignUpButton;
