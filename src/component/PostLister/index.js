import React from 'react';

import Post from '../Post';

function PostLister(props) {
  const { comments, posts } = props;

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostLister;
