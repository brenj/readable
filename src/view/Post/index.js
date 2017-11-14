import PropTypes from 'prop-types';
import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../api';
import CommentLister from '../../component/CommentLister';
import { creators } from '../../action';
import { getSortedComments } from '../../selector';
import CommentForm from '../../component/CommentForm';
import Sorter from '../../component/Sorter';

import './post-view.css';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  addCommentDispatcher: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  editCommentDispatcher: PropTypes.func.isRequired,
  deleteDispatcher: PropTypes.func.isRequired,
  detailsDispatcher: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  sortByDispatcher: PropTypes.func.isRequired,
};

class Post extends Component {
  state = { commentFormVisible: false, commentToEdit: null };

  componentDidMount() {
    const { detailsDispatcher, post } = this.props;

    if (post === null) {
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
    const { activeSort, comments } = this.props;
    const post = this.props.post || {};
    const formattedDate = moment(post.timestamp)
      .format('MMM D YYYY, h:mm A');

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

Post.defaultProps = { post: null };
Post.propTypes = propTypes;

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
  })(Post);