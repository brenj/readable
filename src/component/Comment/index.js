import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../api';
import { creators } from '../../action';
import VoteBox from '../VoteBox';

import './comment.css';

const propTypes = {
  deleteCommentDispatcher: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
  voteOnCommentDispatcher: PropTypes.func.isRequired,
};

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
    const { comment, editHandler } = this.props;

    return (
      <VoteBox
        votes={comment.voteScore}
        handleVote={this.handleVoteOnComment}
      >
        <span>{comment.body}</span>
        <div>
          <span className="comment__details">by {comment.author}</span>
          <span
            className="u-pull-right comment__link--delete"
            onClick={this.handleDeleteComment}
            role="button"
            tabIndex="0"
          >
            Delete
          </span>
          <span
            className="u-pull-right comment__link--edit"
            onClick={() => {
              editHandler(comment);
            }}
            role="button"
            tabIndex="0"
          >
            Edit
          </span>
        </div>
      </VoteBox>
    );
  }
}

Comment.propTypes = propTypes;

export default connect(
  null,
  {
    deleteCommentDispatcher: creators.deleteComment,
    voteOnCommentDispatcher: creators.voteOnComment,
  },
)(Comment);
