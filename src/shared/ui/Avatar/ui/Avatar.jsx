import React from "react";

// import PropTypes from "prop-types";

import classes from "./Avatar.module.scss";

const Avatar = ({ image }) => {
  const imageWorking = (
    <img
      src={image}
      className={classes.articleAvatar}
    />
  );
  return (
    <div>{imageWorking ? imageWorking : <img src="https://static.productionready.io/images/smiley-cyrus.jpg" />}</div>
  );
};

// Avatar.propTypes = {
//   // bla: PropTypes.string,
// };

// Avatar.defaultProps = {
//   // bla: 'test',
// };

// const mapStateToProps = (state) => ({
//   state,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default Avatar;
