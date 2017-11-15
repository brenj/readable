import { createSelector } from 'reselect';
import sortBy from 'sort-by';

import getObjAsArray from '../util';

const getActiveSort = state => state.activeSort;
const getComments = state => getObjAsArray(state.comments);
const getPosts = state => getObjAsArray(state.posts);
const getPostsByLanguage = (state, language) => (
  getObjAsArray(state.posts).filter(post => post.category === language)
);

function getSortedItems(items, sortType) {
  switch (sortType) {
    case 'DATE':
      return items.sort(sortBy('-timestamp'));
    case 'VOTE':
      return items.sort(sortBy('-voteScore'));
    default:
      return items;
  }
}

export const getSortedPosts = createSelector(
  [getActiveSort, getPosts],
  (activeSort, posts) => getSortedItems(posts, activeSort),
);

export const getSortedPostsByLanguage = createSelector(
  [getActiveSort, getPostsByLanguage],
  (activeSort, posts) => getSortedItems(posts, activeSort),
);

export const getSortedComments = createSelector(
  [getActiveSort, getComments],
  (activeSort, comments) => getSortedItems(comments, activeSort),
);
