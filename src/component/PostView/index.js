import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCommentsForPost, getPost } from '../../api';
import CommentLister from '../CommentLister';
import MessageForm from '../MessageForm';
import { showPostDetails } from '../../action';
import Sorter from '../Sorter';

import './post-view.css';

class PostView extends Component {
  componentDidMount() {
    const { detailsDispatcher, post } = this.props;

    if (post === undefined) {
      const postId = this.props.match.params.id;
      Promise.all([getPost(postId), getCommentsForPost(postId)])
        .then(values => (detailsDispatcher(...values)));
    } else {
      getCommentsForPost(post.id)
        .then(comments => detailsDispatcher(post, comments));
    }
  }

  render() {
    const { comments, post = {} } = this.props;
    // TODO: Handle total comments
    const totalComments = 100;

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
        <CommentLister comments={comments} />
        <MessageForm />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id],
  comments: state.comments,
});

export default connect(
  mapStateToProps, { detailsDispatcher: showPostDetails })(PostView);
