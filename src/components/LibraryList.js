import React from "react";
import LibraryCard from "./LibraryCard";

function LibraryList({ allLibraries }) {
  const fullLibraryList = allLibraries.map((library) => (
    <LibraryCard 
    key={library.id}
    genre={library.genre}
    />
  ));

  return (
    <div>
      <h1>Library List</h1>
      <table>
        <thead>
        <tr>
          <th>Library Genre</th>
        </tr>
        </thead>
        <tbody>{fullLibraryList}</tbody>
      </table>
    </div>
  );
}

export default LibraryList;