import { actions } from '../action';

function reduceComments(comments) {
  return comments.reduce((newCommentsState, comment) => (
    { ...newCommentsState, [comment.id]: comment }), {});
}

function commentsReducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_COMMENT: {
      const comment = action.payload;
      return { ...state, [comment.id]: comment };
    }
    case actions.DELETE_COMMENT: {
      const newState = { ...state };
      const comment = action.payload;

      delete newState[comment.id];
      return newState;
    }
    case actions.EDIT_COMMENT: {
      const comment = action.payload;
      return { ...state, [comment.id]: comment };
    }
    case actions.SHOW_POST_DETAILS:
      return reduceComments(action.payload.comments);
    case actions.VOTE_ON_COMMENT: {
      const { comment, voteType } = action.payload;
      let newVoteScore = comment.voteScore;
      newVoteScore += (voteType === 'upVote') ? 1 : -1;
      return {
        ...state,
        [comment.id]: { ...comment, voteScore: newVoteScore },
      };
    }
    default:
      return state;
  }
}

export default commentsReducer;
