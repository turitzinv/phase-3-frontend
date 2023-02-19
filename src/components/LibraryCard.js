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
      <td>{genre}</td>
      <td><button onClick={handleDeleteClick}>Remove</button></td>
    </tr>
  )
}

export default LibraryCard;