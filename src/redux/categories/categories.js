const CHECK = 'bookstore-react/categories/CHECK';

const categoriesReducer = (state=[], action) => {
 switch(action.type){
  case CHECK:
   return action.payload;
  default:
   return state;
 }
}

export const ceckAction = () => {
 return {
  type: CHECK,
  payload: 'Under construction'
 }
}

export default categoriesReducer;