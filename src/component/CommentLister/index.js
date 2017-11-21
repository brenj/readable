import PropTypes from 'prop-types';
import React from 'react';

import Comment from '../Comment';

const propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function CommentLister({ comments, ...props }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          {...props}
        />))}
    </div>
  );
}

CommentLister.propTypes = propTypes;

export default CommentLister;
