import PropTypes from 'prop-types';
import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../api';
import { creators } from '../../action';
import VoteBox from '../VoteBox';

import './post.css';

const propTypes = {
  deletePostDispatcher: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  voteOnPostDispatcher: PropTypes.func.isRequired,
};

class Post extends Component {
  handleDeletePost = () => {
    const { deletePostDispatcher, post } = this.props;
    api.deletePost(post.id)
      .then(() => { deletePostDispatcher(post); });
  };

  handleVoteOnPost = (voteType) => {
    const { voteOnPostDispatcher, post } = this.props;
    api.voteOnPost(post.id, voteType)
      .then(() => { voteOnPostDispatcher(post, voteType); });
  };

  render() {
    const { post } = this.props;
    const formattedDate = moment(post.timestamp).format('MM/DD/YYYY');

    return (
      <VoteBox
        className="row"
        votes={post.voteScore}
        handleVote={this.handleVoteOnPost}
      >
        <div className="nine columns post__details">
          <Link
            className="post__title"
            to={`/post/${post.id}`}
          >
            {post.title}
          </Link>
          <div className="post__info">
            <span>{`by ${post.author} in `}</span>
            <span>
              <Link
                className="post__language"
                to={`/language/${post.category}`}
              >
                {`${post.category} `}
              </Link>
            </span>
            <span>{`on ${formattedDate} `}</span>
            <span className="post__comments">
              <em>{post.commentCount}</em>{' comments'}
            </span>
            <span
              className="u-pull-right post__link--delete"
              onClick={this.handleDeletePost}
              role="button"
              tabIndex="0"
            >
              Delete
            </span>
            <Link
              to={`/post/edit/${post.id}`}
              className="u-pull-right post__link--edit"
            >
              Edit
            </Link>
          </div>
        </div>
      </VoteBox>
    );
  }
}

Post.propTypes = propTypes;

export default connect(
  null,
  {
    deletePostDispatcher: creators.deletePost,
    voteOnPostDispatcher: creators.voteOnPost,
  },
)(Post);
