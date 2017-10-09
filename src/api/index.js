const API_BASE = 'http://localhost:3001';

const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: 'readable',
});

export const getPosts = posts =>
  fetch(`${API_BASE}/posts`, { headers })
    .then(results => results.json())
    .then(data => data);

export const getPost = id =>
  fetch(`${API_BASE}/posts/${id}`, { headers })
    .then(results => results.json())
    .then(data => data);

export const getCommentsForPost = id =>
  fetch(`${API_BASE}/posts/${id}/comments`, { headers })
    .then(results => results.json())
    .then(data => data);
