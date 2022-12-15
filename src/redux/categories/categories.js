const CHECK = 'bookstore-react/categories/CHECK';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return action.payload;
    default:
      return state;
  }
};

export const checkAction = () => ({
  type: CHECK,
  payload: 'Under construction',
});

export default categoriesReducer;
