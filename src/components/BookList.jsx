import React from "react"
import Book from "./Book"
import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.books);
 return (
    <ul className="booksList">
     {books.map(book => (
   <li  key={book.id}> 
     <Book
     id={book.id}
     title={book.title}
     author={book.author}
     />  
    </li>
    ))}
    </ul>
  )
}

export default BookList