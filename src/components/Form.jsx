import React, { useState } from "react"

function Form() {
 const [inputText, setInputText] = useState({
  title: "",
  author: ""
})

const onChange = e => {
 setInputText({
   ...inputText,
   [e.target.name]: e.target.value,
 })
}
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
      <button>add</button>
    </form>
  )
}

export default Form