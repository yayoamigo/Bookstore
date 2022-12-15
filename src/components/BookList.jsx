import React from "react"
import Book from "./Book"
import { useSelector,useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch()
 return (
    <ul className="booksList">
     {books.map(book => (
    <div> 
     <Book
     key={book.title}
     id={book.id}
     title={book.title}
     author={book.author}
     />
     <button type="button" onClick={() => dispatch(removeBook(books.id))}>Remove</button>
     </div>
    ))}
    </ul>
  )
}

export default BookList