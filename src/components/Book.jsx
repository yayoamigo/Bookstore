import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/books';


function Book({title, author, item_id, category}) {
  const dispatch = useDispatch();
  const deleteHandler = (id) =>{
    dispatch(deleteBooks(id.item_id))
  }
  return (
    <>
      <span>
        {title}
        </span>
        <br/>
        <span>
        {author}
      </span>
      <br/>
      <span>
        {category}
      </span>
      <br/>
      <button
        type="button"
        onClick={() => deleteHandler({item_id})}
      >
        Remove
      </button>
    </>
  );
}

export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};