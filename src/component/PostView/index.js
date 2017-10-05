import React, { Component } from 'react';

import Post from '../Post';
import Sorter from '../Sorter';
import VoteBox from '../VoteBox';

import './post-view.css';

class PostView extends Component {
  render() {
    const { id: postId } = this.props.match.params;

    const post = {
      title: 'This is where an actual post will go.',
      body: `
      .some-class {
        background-color: red;
      }
      `,
      creator: 'brandon',
      timestamp: 'October 3',
      votes: '5',
    }

    const totalComments = 100;

    const comment = {
      voteScore: 10,
      body: 'This is a comment.',
      author: 'Brendan',
    }

    return (
      <div>
        <div className="row">
          <div className="offset-by-eight one column">
            <a className="button post-view__button--edit" href="#">
              Edit
            </a>
          </div>
          <div className="offset-by-one two columns">
            <a className="button post-view__button--delete" href="#">
              Delete
            </a>
          </div>
        </div>
        <VoteBox votes={post.votes}>
          <span>{post.title}</span>
          <div className="post-view__details">
            <span>by <em>{post.creator}&nbsp;</em></span>
            <span>on <em>{post.timestamp}&nbsp;</em></span>
            <span className="post-view__total-comments">
              <em>{totalComments}</em>
              &nbsp;comments
            </span>
          </div>
        </VoteBox>
        <pre><code className="post-view__code">{post.body}</code></pre>
        <Sorter sorterType='comment' />
        <VoteBox votes={comment.voteScore}>
          <span>{comment.body}</span>
          <div>by {comment.author}</div>
        </VoteBox>
      </div>
    );
  }
}

export default PostView;
