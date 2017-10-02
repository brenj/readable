import React, { Component } from 'react';

import './post.css';

class Post extends Component {
  render() {
    const { post, totalComments } = this.props;

    return (
      <div className="row post">
        <div className="one column" />
        <div className="one column post__votes">
          <span>{post.votes}</span>
        </div>
        <div className="nine columns post__title">
          <a href="#">{post.title}</a>
          <span className="post__language">({post.language})</span>
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
      </div>
    );
  }
}

export default Post;
