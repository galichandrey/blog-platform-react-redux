import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../../shared/api/actions_all";
import Avatar from "../../../shared/ui/Avatar";

import classes from "./ProfileInfo.module.scss";

const ProfileInfo = ({ dispatchArticlesFunc, username, image }) => {
  useEffect(() => {
    dispatchArticlesFunc();
  }, []);

  return (
    <div className={classes.profileInfo}>
      <div>
        <Link to="/profile">{username}</Link>
      </div>
      <Link to="/profile">
        <Avatar image={image ? image : "https://static.productionready.io/images/smiley-cyrus.jpg"} />
      </Link>
    </div>
  );
};

// ArticleList.propTypes = {
//   // bla: PropTypes.string,
// };

// ArticleList.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => ({
  state,
  // articles: state.fetchArticlesReducer.articles,
});

// const mapDispatchToProps = (dispatch) => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(ProfileInfo);
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;
