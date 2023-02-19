import React from "react";

function GenreSearch({ displayGenreList, handleSelectGenre, selectedGenre }) {
  return (
    <th>
      <select value={selectedGenre} onChange={handleSelectGenre}>
        {displayGenreList}
      </select>
    </th>
  );
}

export default GenreSearch;
