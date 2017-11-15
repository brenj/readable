import { actions } from '../action';

function activeSortReducer(state = 'VOTE', action) {
  switch (action.type) {
    case actions.SORT_BY_VOTE: {
      return 'VOTE';
    }
    case actions.SORT_BY_DATE: {
      return 'DATE';
    }
    default:
      return state;
  }
}

export default activeSortReducer;
