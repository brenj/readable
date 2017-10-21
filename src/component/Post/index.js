import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { api } from '../../api';
import { creators } from '../../action';
import VoteBox from '../VoteBox';

import './post.css';

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
    const formattedDate = moment(post.timestamp).format("MM/DD/YYYY");

    return (
      <VoteBox className="row post" votes={post.voteScore}>
        <div className="nine columns post__details">
          <Link
            className="post__title"
            to={`/post/${post.id}`}
          >
            {post.title}
          </Link>
          <div>
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
              <em>{post.commentCount}</em>{` comments`}
            </span>
            <span
              role="button"
              className="u-pull-right post__link--delete"
              onClick={this.handleDeletePost}
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
        <div className="one column" />
      </VoteBox>
    );
  }
}

export default connect(
  null,
  {
    deletePostDispatcher: creators.deletePost,
    voteOnPostDispatcher: creators.voteOnPost,
  },
)(Post);
