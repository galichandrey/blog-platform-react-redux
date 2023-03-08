import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
//import { Test } from './ArticlePreview.styles';

import Avatar from "../../shared/ui/Avatar";
import dateConvert from "../../shared/lib/index";

import classes from "./ArticlePreview.module.scss";

const ArticlePreview = ({ slug, title, description, createdAt, tagList, favorited, favoritesCount, author }) => {
  const postDate = dateConvert(createdAt);
  const tagListArray = tagList.map((element, index) => {
    return (
      <span
        key={index}
        className={classes.articleTags}
      >
        {element}
      </span>
    );
    // <span className={classes.articleTags}>{element}</span>;
  });
  // console.log(tagListArray);
  return (
    <div className={classes.articlePreview}>
      <div className={classes.articleFirstRow}>
        <div className={classes.articleTopLeftSection}>
          <div className={classes.articleTitleAndLikes}>
            <div className={classes.articleTitle}>
              <Link to={slug}>{title}</Link>
            </div>
            <div className={classes.articleLikes}>
              {favorited ? "❤️" : "🤍"} {favoritesCount}
            </div>
          </div>
          <div className={classes.articleTagWrapper}>
            {tagListArray ? tagListArray : null}
            {/* <span className={classes.articleTags}>Tag1</span> */}
          </div>
        </div>
        <div className={classes.articleUserInfoSection}>
          <div>
            <div className={classes.articleName}>{author.username}</div>
            <div className={classes.articleDate}>{postDate}</div>
          </div>
          <div className={classes.articleAvatar}>
            <Avatar image={author.image} />
            {/* <img src="http://localhost:3000/avatar.png" /> */}
          </div>
        </div>
      </div>
      <div className={classes.articleSecondRow}>
        <div className={classes.articleText}>{description}</div>
        <div className={classes.articleButtons}>
          <button className={classes.articleButtonDelete}>Delete</button>
          <button className={classes.articleButtonEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
};

// ArticlePreview.propTypes = {
//   // bla: PropTypes.string,
// };

// ArticlePreview.defaultProps = {
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
// )(ArticlePreview);

export default ArticlePreview;
