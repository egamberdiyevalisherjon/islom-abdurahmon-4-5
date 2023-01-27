import React from "react";
import BookList from "./BookList";

const Result = () => {
  return (
    <div className="flex">
      <aside className="w-1/6"></aside>
      <div className="w-5/6 bg-slate-200 p-4">
        <BookList />
      </div>
    </div>
  );
};

export default Result;
