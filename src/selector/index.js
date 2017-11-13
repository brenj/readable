import { createSelector } from 'reselect';
import sortBy from 'sort-by';

const getActiveSort = state => state.activeSort;
const getComments = state => state.comments;
const getPosts = state => state.posts;

export const getSortedPosts = createSelector(
  [getActiveSort, getPosts],
  (activeSort, posts) => {
    const postsToSort = Object.keys(posts).map(postId => posts[postId]);

    switch (activeSort) {
      case 'DATE':
        return postsToSort.sort(sortBy('-timestamp'));
      case 'VOTE':
        return postsToSort.sort(sortBy('-voteScore'));
      default:
        return postsToSort;
    }
  },
);

export const getSortedComments = createSelector(
  [getActiveSort, getComments],
  (activeSort, comments) => {
    const commentsToSort = Object.keys(comments).map(
      commentId => comments[commentId]);

    switch (activeSort) {
      case 'DATE':
        return commentsToSort.sort(sortBy('-timestamp'));
      case 'VOTE':
        return commentsToSort.sort(sortBy('-voteScore'));
      default:
        return commentsToSort;
    }
  },
);
