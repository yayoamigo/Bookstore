const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';

const initialState = [];

const bookReducer = (state = initialState, action) => {
switch(action.type){
 case ADD:
  return[
  ...state, action.book
 ];
 case REMOVE:
  return  state.filter((book) => book.id !== action.book.id);
  default:
   return state;
}
}

export const addBook = (book) => {
 return {
  type: ADD,
  book
 }
}

export const removeBook = (book) => {
 return {
  type: REMOVE,
  book
 }
}

export default bookReducer;
