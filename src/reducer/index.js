import { combineReducers } from 'redux';

import { actions } from '../action';

function commentsReducer(state = [], action) {
  switch (action.type) {
    case actions.SHOW_POST_DETAILS:
      return action.payload.comments;
    default:
      return state;
  }
}

function reducePosts(posts) {
  return posts.reduce((newPostsState, post) => (
    { ...newPostsState, [post.id]: post }), {});
}

function postsReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_POST: {
      const post = action.payload;
      return { ...state.posts, [post.id]: post };
    }
    case actions.EDIT_POST: {
      const post = action.payload;
      return { ...state.posts, [post.id]: post };
    }
    case actions.DELETE_POST: {
      const newState = { ...state.posts };
      delete newState[action.payload];
      return newState;
    }
    case actions.SHOW_POSTS:
      return reducePosts(action.payload);
    case actions.SHOW_POSTS_BY_LANG: {
      const { language, posts } = action.payload;
      return reducePosts(posts.filter(post => post.category === language));
    }
    case actions.SHOW_POST_DETAILS: {
      const { post } = action.payload;
      return { [post.id]: post };
    }
    case actions.VOTE_ON_POST: {
      const { post, voteType } = action.payload;
      let newVoteScore = post.voteScore;
      newVoteScore += (voteType === 'upVote') ? 1 : -1;
      return { ...state, [post.id]: { ...post, voteScore: newVoteScore } };
    }
    default:
      return state;
  }
}

export default combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});
