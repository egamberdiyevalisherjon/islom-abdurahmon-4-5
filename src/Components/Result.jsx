import React from "react";
import BookList from "./BookList";
import Bookmarks from "./Bookmarks";

const Result = () => {
  return (
    <div className="flex">
      <aside className="w-3/12 p-4">
        <Bookmarks />
      </aside>
      <div className="w-9/12 bg-slate-200 p-4">
        <BookList />
      </div>
    </div>
  );
};

export default Result;
