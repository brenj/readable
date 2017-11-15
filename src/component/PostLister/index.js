import PropTypes from 'prop-types';
import React from 'react';

import Post from '../Post';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function PostLister({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

PostLister.propTypes = propTypes;

export default PostLister;
