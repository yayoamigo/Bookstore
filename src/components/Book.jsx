import PropTypes from 'prop-types';

function Book({title, author}) {
  return (
    <li>
     <span>{title}</span>
     <br />
     <span>{author}</span>
     <br />
     <button>Remove</button>
    </li>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book