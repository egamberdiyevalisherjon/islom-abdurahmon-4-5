import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = () => {
  const { books } = useSelector(({ search }) => search);

  console.log(books);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
