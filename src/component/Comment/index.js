import React, { Component } from 'react';

import VoteBox from '../VoteBox';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <VoteBox votes={comment.voteScore}>
        <span>{comment.body}</span>
        <div>by {comment.author}</div>
      </VoteBox>
    );
  }
}

export default Comment;
