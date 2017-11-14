import { actions } from '.';
import api from '../api';

export const addPost = post => ({
  type: actions.ADD_POST,
  payload: post,
});

export const addComment = comment => ({
  type: actions.ADD_COMMENT,
  payload: comment,
});

export const deleteComment = comment => ({
  type: actions.DELETE_COMMENT,
  payload: comment,
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

const showPosts = posts => ({
  type: actions.SHOW_POSTS,
  payload: posts,
});

export function loadPosts() {
  return function (dispatch) {
    return api.getPosts().then((posts) => dispatch(showPosts(posts)));
  };
}

export const showPostsByLang = (posts, language) => ({
  type: actions.SHOW_POSTS_BY_LANG,
  payload: { language, posts },
});

export const showPostDetails = (post, comments) => ({
  type: actions.SHOW_POST_DETAILS,
  payload: { comments, post },
});

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
