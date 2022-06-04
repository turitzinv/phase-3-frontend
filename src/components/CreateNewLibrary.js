import React, { useState } from "react";

function CreateNewLibrary({ onAddingLibrary }) {
  const [libraryForm, setLibraryForm] = useState({
    genre: ""
  });

  function handleLibraryChange(event) {
    setLibraryForm({
      ...libraryForm,
      [event.target.name]: event.target.value
    })
  }

  function handleLibrarySubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/libraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        genre: libraryForm.genre
      }),
    })
    .then((resp) => resp.json())
    .then((newLibrary) => {
      onAddingLibrary(newLibrary)
      setLibraryForm("")
    })
  }
  
  return (
  <div id="new_library">
    <h1>Create a New Library</h1>
      <form onSubmit={handleLibrarySubmit}>
        <div>
          <input 
          type="text" 
          name="genre" 
          placeholder="Add Library Genre"
          value={libraryForm.genre}
          onChange={handleLibraryChange}
          />
          <button type="submit">Add Library</button>
        </div>
      </form>
  </div>
  )
}

export default CreateNewLibrary;