import { actions } from '../action';

function reducePosts(posts) {
  return posts.reduce((newPostsState, post) => (
    { ...newPostsState, [post.id]: post }), {});
}

function postsReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_POST: {
      const post = action.payload;
      return { ...state, [post.id]: post };
    }
    case actions.DELETE_POST: {
      const newState = { ...state };
      const post = action.payload;

      delete newState[post.id];
      return newState;
    }
    case actions.EDIT_POST: {
      const post = action.payload;
      return { ...state, [post.id]: post };
    }
    case actions.SHOW_POSTS:
      return reducePosts(action.payload);
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

export default postsReducer;
