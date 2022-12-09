import React from "react"
import Book from "./Book"

const BookList = (props) => {
 return (
    <ul className="booksList">
     {props.list.map(book => (
     <Book
     key={book.id}
     title={book.title}
     author={book.author}
     />
    ))}
    </ul>
  )
}

export default BookList