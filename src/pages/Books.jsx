import React, { useState } from "react"
import BookList from "../components/BookList";
import Form from "../components/Form";
import { v4 as uuidv4 } from "uuid";

function Books() {
  const [list] = useState([
    {
      id: uuidv4(),
      title: 'BOOK 1',
      author: 'yayo1'
    },
    {
      id:uuidv4(),
      title: 'BOOK 2',
      author: 'yayo2'
    }
  ]);

  return (
    <div>
      <BookList list={list}/>
      <Form />
    </div>
  )
}

export default Books