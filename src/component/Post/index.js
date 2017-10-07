import React, { Component } from 'react';

import Link from '../Link';
import VoteBox from '../VoteBox';

import './post.css';

class Post extends Component {
  render() {
    const { post, totalComments } = this.props;

    return (
      <VoteBox className="row post" votes={post.voteScore}>
        <div className="nine columns post__details">
          <a className="post__title"href="/">{post.title}</a>
          <div>
            <span>by {post.author}&nbsp;</span>
            <span>in <Link href="/" text={post.category} />&nbsp;</span>
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

export default Post;
