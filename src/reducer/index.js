import { combineReducers } from 'redux';

import { SHOW_POSTS } from '../action';

function comments(state = {}, action) {
  return state;
}

function reducePosts(posts) {
  return posts.reduce((newPostsState, post) => {
    newPostsState[post.id] = post;
    return newPostsState;
  }, {});
}

function posts(state = {}, action) {
  switch (action.type) {
    case SHOW_POSTS:
      return action.posts.reduce((postsState, post) => {
        const updatedPostsState = postsState;
        updatedPostsState[post.id] = post;
        return postsState;
      }, {});
    default:
      return state;
  }
}

export default combineReducers({
  comments,
  posts,
});
