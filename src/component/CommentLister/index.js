import React from 'react';

import Comment from '../Comment';

function CommentLister(props) {
  const { comments, editHandler } = props;

  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          editHandler={editHandler}
        />))}
    </div>
  );
}

export default CommentLister;
