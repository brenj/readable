import v4 from 'uuid/v4';

const API_BASE = process.env.REACT_APP_API || 'http://localhost:3001';

const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: 'readable',
});

export const getPosts = () =>
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

export const addPost = (title, body, author, category) => {
  const requestBody = JSON.stringify({
    id: v4(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category,
  });
  return fetch(
    `${API_BASE}/posts`, { method: 'POST', headers, body: requestBody })
    .then(results => results.json())
    .then(data => data);
};

export const deletePost = id =>
  fetch(`${API_BASE}/posts/${id}`, { method: 'DELETE', headers })
    .then(results => results.json())
    .then(data => data);

export const editPost = (id, title, body) => {
  const requestBody = JSON.stringify({ title, body });
  return fetch(
    `${API_BASE}/posts/${id}`, { method: 'PUT', headers, body: requestBody })
    .then(results => results.json())
    .then(data => data);
};

export const voteOnPost = (id, voteType) => {
  const requestBody = JSON.stringify({ option: voteType });
  return fetch(
    `${API_BASE}/posts/${id}`, { method: 'POST', headers, body: requestBody })
    .then(results => results.json())
    .then(data => data);
};

export const addComment = (body, author, parentId) => {
  const requestBody = JSON.stringify({
    id: v4(),
    timestamp: Date.now(),
    body,
    author,
    parentId,
  });
  return fetch(
    `${API_BASE}/comments`, { method: 'POST', headers, body: requestBody })
    .then(results => results.json())
    .then(data => data);
};

export const deleteComment = id =>
  fetch(`${API_BASE}/comments/${id}`, { method: 'DELETE', headers })
    .then(results => results.json())
    .then(data => data);

export const editComment = (id, body) => {
  const requestBody = JSON.stringify({ timestamp: Date.now(), body });
  return fetch(
    `${API_BASE}/comments/${id}`,
    { method: 'PUT', headers, body: requestBody },
  )
    .then(results => results.json())
    .then(data => data);
};

export const voteOnComment = (id, voteType) => {
  const requestBody = JSON.stringify({ option: voteType });
  return fetch(
    `${API_BASE}/comments/${id}`,
    { method: 'POST', headers, body: requestBody },
  )
    .then(results => results.json())
    .then(data => data);
};
