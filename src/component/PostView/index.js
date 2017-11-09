import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { api } from '../../api';
import CommentLister from '../CommentLister';
import { creators } from '../../action';
import { getSortedComments } from '../../selectors/index.js';
import CommentForm from '../CommentForm';
import Sorter from '../Sorter';

import './post-view.css';

class PostView extends Component {
  state = { commentFormVisible: false, commentToEdit: null };

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

  handleEditComment = (comment) => {
    this.setState({ commentFormVisible: true, commentToEdit: comment });
  };

  handleSort = (sortType) => {
    this.props.sortByDispatcher(sortType);
  };

  handleSubmitComment = (author, body) => {
    let apiCall;
    let dispatcher;

    // Are we in edit mode (there is a comment to edit)?
    if (this.state.commentToEdit === null) {
      apiCall = api.addComment(body, author, this.props.post.id);
      dispatcher = this.props.addCommentDispatcher;
    } else {
      apiCall = api.editComment(this.state.commentToEdit.id, body);
      dispatcher = this.props.editCommentDispatcher;
    }

    apiCall.then((comment) => {
      dispatcher(comment);
      this.setState({ commentFormVisible: false, commentToEdit: null });
    });
  };

  render() {
    const { activeSort, comments, post = {} } = this.props;
    const formattedDate = moment(post.timestamp).format('MMM D YYYY, h:mm A');

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
        <button
          className="button-primary post-view__button--comment"
          onClick={() => {
            this.setState({ commentFormVisible: true });
          }}
        >
          Add Comment
        </button>
        {
          this.state.commentFormVisible &&
            <CommentForm
              cancelHandler={() => {
                this.setState({
                  commentFormVisible: false,
                  commentToEdit: null,
                });
              }}
              comment={this.state.commentToEdit}
              submitHandler={this.handleSubmitComment}
            />
        }
        <Sorter
          activeSort={activeSort}
          activeSortHandler={this.handleSort}
          sorterType="comment"
        />
        <CommentLister
          comments={comments}
          editHandler={this.handleEditComment}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeSort: state.activeSort,
  comments: getSortedComments(state),
  post: state.posts[ownProps.match.params.id],
});

export default connect(
  mapStateToProps,
  {
    addCommentDispatcher: creators.addComment,
    detailsDispatcher: creators.showPostDetails,
    deleteDispatcher: creators.deletePost,
    editCommentDispatcher: creators.editComment,
    sortByDispatcher: creators.sortBy,
  })(PostView);
