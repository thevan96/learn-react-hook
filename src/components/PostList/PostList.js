import React from "react";
import PropTypes from "prop-types";

const PostList = props => {
  const { postList } = props;
  return (
    <div className="post-list">
      <ul>
        {postList.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  postList: PropTypes.array
};

PostList.defaultProps = {
  postList: []
};

export default PostList;
