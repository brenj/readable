import PropTypes from 'prop-types';
import * as moment from 'moment';
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
    const formattedDate = moment(comment.timestamp).format('MM/DD/YYYY');

    return (
      <VoteBox
        className="row"
        votes={comment.voteScore}
        handleVote={this.handleVoteOnComment}
      >
        <div className="nine columns comment__info">
          <span className="comment__body">{comment.body}</span>
          <span className="comment__details">by {comment.author}</span>
          <span className="comment__details">{` on ${formattedDate}`}</span>
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
            tabIndex="-1"
          >
            Edit
          </span>
        </div>
        <div className="one column" />
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
