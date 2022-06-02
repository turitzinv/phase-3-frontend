import React from "react";

function BookCard({ title, author, year, read }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{read}</td>
    </tr>
  )
}

export default BookCard;