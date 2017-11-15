import PropTypes from 'prop-types';
import React from 'react';

import Comment from '../Comment';

const propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  editHandler: PropTypes.func.isRequired,
};

function CommentLister({ comments, editHandler }) {
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

CommentLister.propTypes = propTypes;

export default CommentLister;
