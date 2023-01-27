import React from "react";
import BookmarkList from "./BookmarkList";

const Bookmarks = () => {
  return (
    <div>
      <h2 className="text-4xl">
        BookMarks <i className="fa-solid fa-bookmark text-rose-600"></i>
      </h2>
      <p className="my-2">
        If you don’t like to read, you haven’t found the right book
      </p>
      <BookmarkList />
    </div>
  );
};

export default Bookmarks;
