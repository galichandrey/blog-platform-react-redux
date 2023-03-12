import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { Test } from './ArticlePreview.styles';

import * as actions from "../models/actions";
import Avatar from "../../../shared/ui/Avatar";
import dateConvert from "../../../shared/lib/index";

import classes from "./Article.module.scss";

const Article = ({ article, slug, dispatchOneArticleFunc }) => {
  let postDate = "";
  useLayoutEffect(() => {
    dispatchOneArticleFunc(slug);
  }, [slug]);
  const { title, description, body, createdAt, tagList, favorited, favoritesCount, author } = article;
  if (createdAt) {
    postDate = dateConvert(createdAt);
  }
  let tagListArray = [];
  if (tagList) {
    tagListArray = tagList.map((element, index) => {
      return (
        <span
          key={index}
          className={classes.articleTags}
        >
          {element}
        </span>
      );
    });
  }
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
          {/* <div className={classes.articleTagWrapper}>Тэги тут</div> */}
          <div className={classes.articleTagWrapper}>{tagListArray ? tagListArray : null}</div>
        </div>
        <div className={classes.articleUserInfoSection}>
          <div>
            <div className={classes.articleName}>{author?.username ? author.username : null}</div>
            {/* <div className={classes.articleDate}>{createdAt}</div> */}
            <div className={classes.articleDate}>{postDate}</div>
          </div>
          <div className={classes.articleAvatar}>
            <Avatar image={author?.image ? author.image : "./avatar.png"} />
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
      <div>{body}</div>
    </div>
  );
};

// ArticlePreview.propTypes = {
//   // bla: PropTypes.string,
// };

// ArticlePreview.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
  state,
  article: state.fetchOneArticleReducer.article,
});

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(Article);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ArticlePreview);

// export default Article;
