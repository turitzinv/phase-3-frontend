import React from "react";

function GenreSearch({ displayGenreList, handleSelectGenre, selectedGenre }) {
  return (
    <div>
      <select
      value={selectedGenre} 
      onChange={handleSelectGenre}
      >
      {displayGenreList}
      </select>
    </div>
  )
}

export default GenreSearch