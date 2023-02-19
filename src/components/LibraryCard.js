import React from "react";

function LibraryCard({ genre, onDeleteGenre, libraries }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/libraries/${libraries.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteGenre(libraries))
  }

  return (
    <tr>
      <th>{genre}</th>
      {libraries.books.length < 1 ? (
      <th><button onClick={handleDeleteClick}>Remove</button></th>
      ): null}
    </tr>
  )
}

export default LibraryCard;