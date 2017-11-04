import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { api } from '../../api';
import CommentLister from '../CommentLister';
import { creators } from '../../action';
import CommentForm from '../CommentForm';
import Sorter from '../Sorter';

import './post-view.css';

class PostView extends Component {
  state = { commentFormVisible: false };

  componentDidMount() {
    const { detailsDispatcher, post } = this.props;

    if (post === undefined) {
      const postId = this.props.match.params.id;
      Promise.all([api.getPost(postId), api.getCommentsForPost(postId)])
        .then(values => (detailsDispatcher(...values)));
    } else {
      api.getCommentsForPost(post.id)
        .then(comments => detailsDispatcher(post, comments));
    }
  }

  handleDeletePost = () => {
    const { deleteDispatcher, history, post } = this.props;
    api.deletePost(post.id).then(() => {
      deleteDispatcher(post);
      history.goBack();
    });
  };

  handleSubmitComment = (author, body) => {
    const { addCommentDispatcher, post } = this.props;
    api.addComment(body, author, post.id)
      .then((comment) => {
        addCommentDispatcher(comment);
        this.setState({ commentFormVisible: false });
      });
  };

  render() {
    const { comments, post = {} } = this.props;
    const formattedDate = moment(post.timestamp).format("MMM D YYYY, h:mm A");

    return (
      <div>
        <div className="row">
          <div className="offset-by-eight one column">
            <Link
              to={`/post/edit/${post.id}`}
              className="button post-view__button--edit"
            >
              Edit
            </Link>
          </div>
          <div className="offset-by-one two columns">
            <button
              className="button post-view__button--delete"
              onClick={this.handleDeletePost}
            >
              Delete
            </button>
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
              <td>{formattedDate}</td>
              <td>{post.voteScore}</td>
            </tr>
          </tbody>
        </table>
        <pre><code className="post-view__code">{post.body}</code></pre>
        <Sorter sorterType="comment" />
        <button
          className="button-primary"
          onClick={() => {
            this.setState({ commentFormVisible: true });
          }}
        >
          Comment
        </button>
        <CommentLister comments={comments} />
        {
          this.state.commentFormVisible &&
            <CommentForm
              submitHandler={this.handleSubmitComment}
              cancelHandler={() => {
                this.setState({ commentFormVisible: false });
              }}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id],
  comments: Object.keys(state.comments)
    .map(commentId => state.comments[commentId]),
});

export default connect(
  mapStateToProps,
  {
    addCommentDispatcher: creators.addComment,
    detailsDispatcher: creators.showPostDetails,
    deleteDispatcher: creators.deletePost,
  })(PostView);
