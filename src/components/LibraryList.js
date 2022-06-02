import React from "react";
import LibraryCard from "./LibraryCard";
import BookCard from "./BookCard";

function LibraryList({ allLibraries, allBooks }) {
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
    genre={book.library_id}
    />
  ))

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
      <h1>Book List</h1>
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Read?</th>
          <th>Genre</th>
        </tr>
        </thead>
        <tbody>{fullBookList}</tbody>
      </table>
    </div>
  );
}

export default LibraryList;