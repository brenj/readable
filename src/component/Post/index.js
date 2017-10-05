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
          <a className="post__title"href="#">{post.title}</a>
          <span className="post__language">
            (&nbsp;
              <Link href="#" text={post.language} />
            &nbsp;)
          </span>
          <div>
            <span>by <em>{post.creator}&nbsp;</em></span>
            <span>on <em>{post.timestamp}&nbsp;</em></span>
            <span className="post__comments">
              <em>{totalComments}</em>
              &nbsp;comments
            </span>
          </div>
        </div>
        <div className="one column" />
      </VoteBox>
    );
  }
}

export default Post;
