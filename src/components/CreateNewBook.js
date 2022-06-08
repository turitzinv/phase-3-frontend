import React, { useState } from "react";
import {useHistory} from "react-router-dom";
//NOTE!!! Form is not working yet

function CreateNewBook({ onAddingBook, allLibraries, handleAddingLibrary }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    read: "false",
    library: ""
  });

  let history = useHistory()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        author: formData.author,
        year: formData.year,
        //read: formData.read,
        library: formData.library
        }),
      })
      .then((resp) =>resp.json())
      .then((newBook) => {
        onAddingBook(newBook)
        //if (!allLibraries.includes(formData.library)) {
        //  handleAddingLibrary(formData.library)
        //} else {
        // history.push("/librarylist")
        //}
        history.push("/librarylist")
      })
  }

  return (
    <div>
      <h1 id="create_new_book_h1">Create New Book</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input 
          type="text" 
          name="title" 
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input 
          type="text" 
          name="author"
          placeholder="Author" 
          value={formData.author}
          onChange={handleChange}
           />
        </div>
        <div className="input-field">
          <input 
          type="text" 
          name="year" 
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input 
          type="text" 
          name="library" 
          placeholder="Library Genre"
          value={formData.library}
          onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default CreateNewBook;

/*<div className="input-field">
  <input 
  type="text" 
  name="read" 
  placeholder="Book Read?"
  value={formData.read}
  onChange={handleChange}
/>
</div> */
