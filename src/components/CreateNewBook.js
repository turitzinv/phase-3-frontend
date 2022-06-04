import React, { useState } from "react";
//NOTE!!! Form is not working yet

function CreateNewBook({ onAddingBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    read: "",
    genre: ""
  });

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
        read: formData.read,
        genre: formData.genre //needs to be fixed, because library_id missing?
        }),
      })
      .then((resp) =>resp.json())
      .then((newBook) => {
        console.log(newBook)
        //alert("Book Added!")
      })
  }

  return (
    <div>
      <h1>Create New Book</h1>
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
          name="read" 
          placeholder="Book Read?"
          value={formData.read}
          onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input 
          type="text" 
          name="genre" 
          placeholder="Library Genre"
          value={formData.genre}
          onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default CreateNewBook;
