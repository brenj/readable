import PropTypes from 'prop-types';
import * as moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { creators } from '../../action';
import Alert from '../../component/Alert';
import api from '../../api';
import CommentForm from '../../component/CommentForm';
import CommentLister from '../../component/CommentLister';
import ErrorView from '../../view/Error';
import { getLanguage } from '../../util/languages';
import { getSortedComments } from '../../selector';
import Sorter from '../../component/Sorter';

import './post-view.css';

const propTypes = {
  activeSort: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
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
};

class PostView extends Component {
  state = {
    commentFormVisible: false,
    commentToEdit: null,
    postNotFound: false,
  };

  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.boundActionCreators.loadComments(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ postNotFound: !this.props.post && !nextProps.post });
  }

  boundActionCreators = bindActionCreators(creators, this.props.dispatch);

  handleDeletePost = () => {
    const { history, post } = this.props;
    api.deletePost(post.id).then(() => {
      this.boundActionCreators.deletePost(post);
      history.goBack();
    });
  };

  handleEditComment = (comment) => {
    this.setState({ commentFormVisible: true, commentToEdit: comment });
  };

  handleDeleteComment = (comment) => {
    api.deleteComment(comment.id).then(() => {
      this.boundActionCreators.deleteComment(comment, this.props.post);
    });
  };

  handleVoteOnComment = (comment, voteType) => {
    api.voteOnComment(comment.id, voteType)
      .then(() => {
        this.boundActionCreators.voteOnComment(comment, voteType);
      });
  };

  handleSort = (sortType) => {
    this.boundActionCreators.sortBy(sortType);
  };

  handleSubmitComment = (author, body) => {
    // Are we in edit mode (there is a comment to edit)?
    if (this.state.commentToEdit === null) {
      const { post } = this.props;
      api.addComment(body, author, post.id).then((comment) => {
        this.boundActionCreators.addComment(comment, post);
        this.setState({ commentFormVisible: false, commentToEdit: null });
      });
    } else {
      api.editComment(this.state.commentToEdit.id, body).then((comment) => {
        this.boundActionCreators.editComment(comment);
        this.setState({ commentFormVisible: false, commentToEdit: null });
      });
    }
  };

  render() {
    const { commentFormVisible, commentToEdit, postNotFound } = this.state;

    if (postNotFound) {
      return <ErrorView code="404" message="Page not found" />;
    }

    const { activeSort, comments } = this.props;
    const post = this.props.post || {};
    const formattedDate = moment(post.timestamp)
      .format('MMM D YYYY, h:mm A');
    const language = getLanguage(post.category) || {};

    let commentsView = <Alert content="No comments" />;
    if (commentFormVisible) {
      commentsView = (
        <CommentForm
          cancelHandler={() => {
            this.setState({
              commentFormVisible: false,
              commentToEdit: null,
            });
          }}
          comment={commentToEdit}
          submitHandler={this.handleSubmitComment}
        />
      );
    } else if (comments.length !== 0) {
      commentsView = (
        <div>
          <Sorter
            activeSort={activeSort}
            activeSortHandler={this.handleSort}
            sorterType="comment"
          />
          <CommentLister
            comments={comments}
            onDelete={this.handleDeleteComment}
            onEdit={this.handleEditComment}
            onVote={this.handleVoteOnComment}
          />
        </div>
      );
    }

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
              <th>Language</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post.author}</td>
              <td>{formattedDate}</td>
              <td>{language.displayName}</td>
              <td>{post.voteScore}</td>
            </tr>
          </tbody>
        </table>
        <pre><code className="post-view__code">{post.body}</code></pre>
        {
          !commentFormVisible &&
            <button
              className="button-primary post-view__button--comment"
              onClick={() => {
                this.setState({ commentFormVisible: true });
              }}
            >
              New Comment
            </button>
        }
        {commentsView}
      </div>
    );
  }
}

PostView.defaultProps = { post: null };
PostView.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  return {
    activeSort: state.activeSort,
    comments: getSortedComments(state, postId),
    post: state.posts[postId],
  };
};

export default connect(mapStateToProps)(PostView);
