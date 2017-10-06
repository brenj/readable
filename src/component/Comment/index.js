import React, { Component } from 'react';

import VoteBox from '../VoteBox';

import './comment.css';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <VoteBox votes={comment.voteScore}>
        <span>{comment.body}</span>
        <div>
          <span className="comment__details">by {comment.author}</span>
          <a className="u-pull-right comment__link--delete" href="/">Delete</a>
          <a className="u-pull-right comment__link--edit" href="/">Edit</a>
        </div>
      </VoteBox>
    );
  }
}

export default Comment;