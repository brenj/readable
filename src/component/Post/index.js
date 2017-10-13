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

  render() {
    const { post, totalComments } = this.props;
    const postPath = `/${post.category}/${post.id}`;

    return (
      <VoteBox className="row post" votes={post.voteScore}>
        <div className="nine columns post__details">
          <Link className="post__title" to={postPath}>{post.title}</Link>
          <div>
            <span>by {post.author}&nbsp;</span>
            <span>
              in&nbsp;
              <Link className="post__language" to={post.category}>
                {post.category}
              </Link>
              &nbsp;
            </span>
            <span>on {post.timestamp}&nbsp;</span>
            <span className="post__comments">
              <em>{totalComments}</em>
              &nbsp;comments
            </span>
            <a className="u-pull-right post__link--delete" href="/">Delete</a>
            <a className="u-pull-right post__link--edit" href="/">Edit</a>
          </div>
        </div>
        <div className="one column" />
      </VoteBox>
    );
  }
}

export default connect(
  null, { deletePostDispatcher: creators.deletePost })(Post);
