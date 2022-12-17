import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { postBooks } from "../redux/books/books";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Form.css';

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
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form >
      <input
        type="text"
        placeholder="Book title..."
        value={inputText.title}
        name="title"
        onChange={onChange}
        id="input-title"
      />
      <input
        type="text"
        id="input-author"
        placeholder="Add an author..."
        value={inputText.author}
        name="author"
        onChange={onChange}
      />
      <select type="text" id="input-category" name="category"  value={inputText.category} placeholder="Category" onChange={onChange}>
          <option value="" disabled>Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="biography">Biography</option>
        </select>
      <button type="button" className="btn-add-book" onClick={addBookHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};


export default Form ;