import React from "react";
import { BookMarkButton, MoreInfoButton, ReadButton } from "./Button";

const Book = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <div className="bg-slate-50 border">
      <img
        className="w-full h-96 object-cover"
        src={volumeInfo.imageLinks?.thumbnail}
        alt=""
      />
      <div className="p-4">
        <h2 className="text-4xl">{volumeInfo.title}</h2>
        <p>{volumeInfo.publisher}</p>
        <p>{volumeInfo.publishedDate || "No Info"}</p>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-4">
            <BookMarkButton book={book} />
            <MoreInfoButton book={book} />
          </div>
          <div>
            <ReadButton previewLink={volumeInfo.previewLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
