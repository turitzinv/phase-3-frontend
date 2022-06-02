import React from "react";

function LibraryCard({ genre }) {
  return (
    <tr>
      <td>{genre}</td>
    </tr>
  )
}

export default LibraryCard;

//if genre = "Comic Books", library_id = 1
//if genre = "Adventure", library_id = 2
//if genre = "How To", library_id = 3