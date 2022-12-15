import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { addBook } from "../redux/books/books";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [inputText, setInputText] = useState({
    title: "",
    author: ""
  })
  const dispatch = useDispatch();
  
  const onChange = e => {
   setInputText({
     ...inputText,
     [e.target.name]: e.target.value,
   })
  } 
   

  const addBookHandler = e => {
    e.preventDefault();
    const {title, author} = inputText;
    if(title && author){
      dispatch(addBook({title,author, id: uuidv4()}));
      setInputText({title: '', author: ''})
    };
   };

  return (
    <form >
     <input
        type="text"
        className="input-title"
        placeholder="Book title..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="text"
        className="input-title"
        placeholder="Add an author..."
        value={inputText.author}
        name="author"
        onChange={onChange}
      />
      <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
  );
};


export default Form ;