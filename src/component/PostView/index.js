import React, { Component } from 'react';

import Comment from '../Comment';
import MessageForm from '../MessageForm';
import Sorter from '../Sorter';

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
      author: 'brandon',
      timestamp: 'October 3',
      voteScore: '5',
    };

    const totalComments = 100;

    const comment = {
      voteScore: 10,
      body: 'This is a comment.',
      author: 'Brendan',
    };

    return (
      <div>
        <div className="row">
          <div className="offset-by-eight one column">
            <a className="button post-view__button--edit" href="/">
              Edit
            </a>
          </div>
          <div className="offset-by-one two columns">
            <a className="button post-view__button--delete" href="/">
              Delete
            </a>
          </div>
        </div>
        <h5 className="post-view__title">{post.title}</h5>
        <table className="u-full-width post-view__table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Date</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post.author}</td>
              <td>{post.timestamp}</td>
              <td>{post.voteScore}</td>
            </tr>
          </tbody>
        </table>
        <pre><code className="post-view__code">{post.body}</code></pre>
        <Sorter sorterType="comment" />
        <Comment comment={comment} />
        <MessageForm />
      </div>
    );
  }
}

export default PostView;
