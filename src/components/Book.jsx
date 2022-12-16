import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/books';


function Book({title, author, id, category}) {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(deleteBooks({ title, author,category, id }))}
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};