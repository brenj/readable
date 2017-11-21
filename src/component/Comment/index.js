import PropTypes from 'prop-types';
import * as moment from 'moment';
import React, { Component } from 'react';

import api from '../../api';
import VoteBox from '../VoteBox';

import './comment.css';

const propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
};

class Comment extends Component {
  handleDeleteComment = () => {
    const { comment, onDelete } = this.props;
    api.deleteComment(comment.id).then(() => { onDelete(comment); });
  };

  handleVoteOnComment = (voteType) => {
    const { comment, onVote } = this.props;
    api.voteOnComment(comment.id, voteType)
      .then(() => { onVote(comment, voteType); });
  };

  render() {
    const { comment, onEdit } = this.props;
    const formattedDate = moment(comment.timestamp).format('MM/DD/YYYY');

    return (
      <VoteBox
        className="row"
        votes={comment.voteScore}
        handleVote={this.handleVoteOnComment}
      >
        <div className="nine columns comment__details">
          <div className="comment__info">
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
              onClick={() => { onEdit(comment); }}
              role="button"
              tabIndex="-1"
            >
            Edit
            </span>
          </div>
        </div>
      </VoteBox>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
