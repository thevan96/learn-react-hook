import React from "react";
import PropTypes from "prop-types";

import "./Pagination.style.scss";

const Pagination = props => {
  const { pagination, onChangePage } = props;
  const { _page, _limit } = pagination;
  const _totalRow = 11;

  const totalPage = Math.ceil(_totalRow / _limit);

  const handleOnChangPage = page => () => {
    if (onChangePage) {
      onChangePage(page);
    }
  };

  return (
    <div className="pagination">
      <button disabled={_page <= 1} onClick={handleOnChangPage(_page - 1)}>
        Previous
      </button>
      <button
        disabled={_page >= totalPage}
        onClick={handleOnChangPage(_page + 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onChangePage: PropTypes.func
};

Pagination.defaultProps = {
  onChangePage: null
};

export default Pagination;
