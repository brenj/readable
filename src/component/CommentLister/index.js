import React from 'react';

import Comment from '../Comment';

function CommentLister(props) {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />))}
    </div>
  );
}

export default CommentLister;
