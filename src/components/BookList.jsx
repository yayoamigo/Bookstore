import React, { useEffect } from 'react';
import Book from "./Book"
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from '../redux/books/books';


const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() =>{
  dispatch(getBooks());
  }, []);
 return (
    <ul className="booksList">
     {books.map(book => (
   <li  key={book.item_id}> 
     <Book
     item_id={book.item_id}
     title={book.title}
     author={book.author}
     category={book.category}
     />  
    </li>
    ))}
    </ul>
  );
};

export default BookList