import React from "react";

function LibraryCard({ genre, onDeleteGenre, libraries }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/libraries/${libraries.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteGenre(libraries))
  }

  console.log(libraries.books.length)

  return (
    <tr>
      <th>{genre}</th>
      {libraries.books.length < 1 ? (
      <button onClick={handleDeleteClick}>Remove</button>
      ): null}
    </tr>
  )
}

export default LibraryCard;