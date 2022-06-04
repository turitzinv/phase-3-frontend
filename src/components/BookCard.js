import React from "react";

function BookCard({ title, author, year, read, genre, onDeleteBook, book, onUpdateBook }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteBook(book))
  }

  function handleOnChange() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        read: !book.read
      }),
    })
    .then((resp) => resp.json())
    .then((updatedBook) => onUpdateBook(updatedBook))
  }

  return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{year}</td>
        <td>{genre}</td>
        <td><input type="checkbox" checked={read} onChange={handleOnChange}></input></td>
        <td><button onClick={handleDeleteClick}>Delete</button></td>
      </tr>
  )
}

export default BookCard;