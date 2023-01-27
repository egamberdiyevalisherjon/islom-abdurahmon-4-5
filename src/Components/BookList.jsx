import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = () => {
  const { books, hasSearched } = useSelector(({ search }) => search);

  console.log(books);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.length === 0 && !hasSearched && <h1>Use input to search book</h1>}

      {books.length === 0 && hasSearched && <h1>No Book Found</h1>}

      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
