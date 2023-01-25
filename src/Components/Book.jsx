import React from "react";

const Book = ({ book }) => {
  console.log(book.volumeInfo);
  return <div>{book.volumeInfo.title}</div>;
};

export default Book;
