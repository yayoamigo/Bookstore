import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';

const initialState = [
  {
    id: uuidv4(),
    title: 'BOOK 33',
    author: 'yayo1',
  },
  {
    id: uuidv4(),
    title: 'BOOK 22',
    author: 'yayo2',
  },
];

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

export default bookReducer;
