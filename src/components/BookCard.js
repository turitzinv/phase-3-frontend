import React from "react";

function BookCard({ title, author, year, read, genre }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{read}</td>
      <td>{genre}</td>
    </tr>
  )
}

export default BookCard;