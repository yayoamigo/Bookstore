import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { postBooks } from "../redux/books/books";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const [inputText, setInputText] = useState({
    title: "",
    author: "",
    category: ""
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
    const {title, author, category} = inputText;
    if(title && author && category){
      dispatch(postBooks({ item_id: uuidv4(),title,author,category}));
      setInputText({title: '', author: '', category: ''})
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
      <select type="text" name="category" className="input-title" value={inputText.category} placeholder="Category" onChange={onChange}>
          <option value="" disabled>Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="biography">Biography</option>
        </select>
      <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
  );
};


export default Form ;