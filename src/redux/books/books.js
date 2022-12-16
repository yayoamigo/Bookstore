import { createAsyncThunk } from '@reduxjs/toolkit';
import BOOK_URL from '../API';

const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';
const FETCH_BOOKS = 'bookstore-react/books/FETCH';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.book,
      ];
    case REMOVE: {
      const index = state.findIndex((x) => x.id === action.book.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    case FETCH_BOOKS: {
      const bookList = [];
      Object.entries(action.books).forEach(([key, value]) => bookList.push({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      return [...bookList];
    }
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  books,
});

export const getBooks = createAsyncThunk(FETCH_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(BOOK_URL, {
    method: 'GET',
  });
  const data = await response.json();
  thunkAPI.dispatch(fetchBooks(data));
  return data;
});

export const deleteBooks = createAsyncThunk(REMOVE, async (bookId, thunkAPI) => {
  const response = await fetch(`${BOOK_URL}/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: bookId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const dataId = await response.text();
  thunkAPI.dispatch(removeBook(bookId));
  return dataId;
});

export const postBooks = createAsyncThunk(ADD, async (book, thunkAPI) => {
  const response = await fetch(BOOK_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.text();
  thunkAPI.dispatch(addBook(book));
  return data;
});

export default bookReducer;
