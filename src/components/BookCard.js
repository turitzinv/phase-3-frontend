import React from "react";

function BookCard({ title, author, year, read, genre, onDeleteBook, book }) {
//need book.id fetch
  function handleDeleteClick() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteBook(book))
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{genre}</td>
      <td>{read}</td>
      <td><button onClick={handleDeleteClick}>Delete</button></td>
    </tr>
  )
}

export default BookCard;