import React, { Component } from 'react';
import { connect } from 'react-redux';

import { api } from '../../api';
import { creators } from '../../action';
import VoteBox from '../VoteBox';

import './comment.css';

class Comment extends Component {

  handleDeleteComment = () => {
    const { deleteCommentDispatcher, comment } = this.props;
    api.deleteComment(comment.id)
      .then(() => { deleteCommentDispatcher(comment); });
  };

  handleVoteOnComment = (voteType) => {
    const { voteOnCommentDispatcher, comment } = this.props;
    api.voteOnComment(comment.id, voteType)
      .then(() => { voteOnCommentDispatcher(comment, voteType); });
  };

  render() {
    const { comment } = this.props;

    return (
      <VoteBox
        votes={comment.voteScore}
        handleVote={this.handleVoteOnComment}
      >
        <span>{comment.body}</span>
        <div>
          <span className="comment__details">by {comment.author}</span>
          <span
            role="button"
            className="u-pull-right comment__link--delete"
            onClick={this.handleDeleteComment}
          >
            Delete
          </span>
          <a className="u-pull-right comment__link--edit" href="/">Edit</a>
        </div>
      </VoteBox>
    );
  }
}

export default connect(
  null,
  {
    deleteCommentDispatcher: creators.deleteComment,
    voteOnCommentDispatcher: creators.voteOnComment,
  },
)(Comment);
