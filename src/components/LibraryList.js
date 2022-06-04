import React from "react";
import LibraryCard from "./LibraryCard";
import BookCard from "./BookCard";
import GenreSearch from "./GenreSearch";
import CreateNewLibrary from "./CreateNewLibrary";

function LibraryList({ allLibraries, allBooks, displayGenreList, handleSelectGenre, selectedGenre, handleDeleteBook, handleAddingLibrary, handleUpdateBook }) {
  const fullLibraryList = allLibraries.map((library) => (
    <LibraryCard 
    key={library.id}
    genre={library.genre}
    />
  ));

  const fullBookList = allBooks.map((book) => (
    <BookCard
    key={book.id}
    title={book.title}
    author={book.author}
    year={book.year}
    read={book.read}
    genre={book.library.genre}
    onDeleteBook={handleDeleteBook}
    book={book}
    onUpdateBook={handleUpdateBook}
    />

  ))

  return (
    <div>
      <CreateNewLibrary onAddingLibrary={handleAddingLibrary} />
      <h1>Library List</h1>
      <table>
        <thead>
        <tr>
          <th>Select Library Genre</th>
          <GenreSearch 
          displayGenreList={displayGenreList} 
          handleSelectGenre={handleSelectGenre}
          selectedGenre={selectedGenre}
          />
        </tr>
        </thead>
        <tbody>{fullLibraryList}</tbody>
      </table>
      <h1>Book List</h1>
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Read?</th>
          <th>Delete?</th>
        </tr>
        </thead>
        <tbody>
          {fullBookList}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryList;