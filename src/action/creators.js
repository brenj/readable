import { actions } from '.';
import api from '../api';

export const addPost = post => ({
  type: actions.ADD_POST,
  payload: post,
});

export const addComment = (comment, post) => ({
  type: actions.ADD_COMMENT,
  payload: { comment, post },
});

export const deleteComment = (comment, post) => ({
  type: actions.DELETE_COMMENT,
  payload: { comment, post },
});

export const deletePost = post => ({
  type: actions.DELETE_POST,
  payload: post,
});

export const editComment = comment => ({
  type: actions.EDIT_COMMENT,
  payload: comment,
});

export const editPost = post => ({
  type: actions.EDIT_POST,
  payload: post,
});

export const loadPosts = () => dispatch => (
  api.getPosts().then(posts => dispatch({
    type: actions.LOAD_POSTS,
    payload: posts,
  }))
);

export const loadComments = postId => dispatch => (
  api.getCommentsForPost(postId).then(comments => dispatch({
    type: actions.LOAD_COMMENTS,
    payload: { comments, postId },
  }))
);

export const sortBy = (sortType) => {
  if (sortType === 'DATE') {
    return {
      type: actions.SORT_BY_DATE,
      payload: 'DATE',
    };
  }
  return {
    type: actions.SORT_BY_VOTE,
    payload: 'VOTE',
  };
};

export const voteOnComment = (comment, voteType) => ({
  type: actions.VOTE_ON_COMMENT,
  payload: { comment, voteType },
});

export const voteOnPost = (post, voteType) => ({
  type: actions.VOTE_ON_POST,
  payload: { post, voteType },
});
