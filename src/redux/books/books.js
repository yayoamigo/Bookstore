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
    case REMOVE:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});

export default bookReducer;
