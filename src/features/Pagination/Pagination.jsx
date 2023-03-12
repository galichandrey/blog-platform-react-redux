import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Pagination } from "antd";

import * as actions from "../../shared/api/actions_all";

import classes from "./Pagination.module.scss";

const PaginationWrapper = ({ dispatchArticlesFunc, articlesCount = 0, offset }) => {
  // console.log(articlesCount);
  function onChange(page) {
    dispatchArticlesFunc(page - 1);
  }
  return (
    <div className={classes.paginationWrapper}>
      <div>
        <Pagination
          defaultCurrent={1}
          current={offset + 1}
          total={articlesCount}
          pageSize={5}
          onChange={onChange}
          showSizeChanger={false}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  );
};

// Pagination.propTypes = {
//   // bla: PropTypes.string,
// };

// Pagination.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state) => ({
  offset: state.fetchArticlesReducer.offset,
  articlesCount: state.fetchArticlesReducer.articlesCount,
});

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

export default connect(mapStateToProps, actions)(PaginationWrapper);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Pagination);

// export default PaginationWrapper;
