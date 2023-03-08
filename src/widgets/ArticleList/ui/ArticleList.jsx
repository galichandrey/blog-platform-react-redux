import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../../shared/api/actions_all";
import ArticlePreview from "../../../features/ArticlePreview/ArticlePreview";
import PaginationWrapper from "../../../features/Pagination/Pagination";

import classes from "./ArticleList.module.scss";

const ArticleList = ({ dispatchArticlesFunc, articles, offset = 0 }) => {
  useEffect(() => {
    dispatchArticlesFunc(offset);
  }, [offset]);

  const articleList = articles.map(
    ({ slug, title, description, body, createdAt, tagList, favorited, favoritesCount, author }) => {
      return (
        <ArticlePreview
          //articlesCount
          key={slug}
          slug={slug}
          title={title}
          description={description}
          body={body}
          createdAt={createdAt}
          tagList={tagList}
          favorited={favorited}
          favoritesCount={favoritesCount}
          author={author}
          //username, image, following
        />
      );
    }
  );
  return (
    <div className={classes.articleList}>
      {articleList}
      <PaginationWrapper />
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
  // state,
  articles: state.fetchArticlesReducer.articles,
  offset: state.fetchArticlesReducer.offset,
  articlesCount: state.fetchArticlesReducer.articlesCount,
});

// const mapDispatchToProps = (dispatch) => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(ArticleList);
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;
