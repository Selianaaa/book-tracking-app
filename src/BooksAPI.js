import { booksApi } from './constants';

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const getMyBooks = () =>
  fetch(`${booksApi}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const updateMyBooks = (book, shelf) =>
  fetch(`${booksApi}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const searchBooks = (query) =>
  fetch(`${booksApi}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
