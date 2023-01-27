import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_BOOKMARKS } from "../store/actions";

const Bookmark = ({ bookmark, bookmarks }) => {
  const dispatch = useDispatch();

  function handleRemoveBookmark() {
    bookmarks = bookmarks.filter((bm) => bm.id !== bookmark.id);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    dispatch({
      type: UPDATE_BOOKMARKS,
      payload: bookmarks,
    });
  }
  return (
    <div className="bg-slate-100 flex p-4 justify-between">
      <div>
        <h3 className="text-xl">{bookmark.title}</h3>
        <p>{bookmark.publisher}</p>
      </div>
      <div className="flex items-center text-2xl gap-4">
        <a href={bookmark.previewLink} target="_blank">
          <i className="fa-solid fa-book-open hover:text-slate-400"></i>
        </a>
        <button onClick={handleRemoveBookmark}>
          <i className="fa-solid fa-delete-left text-rose-600"></i>
        </button>
      </div>
    </div>
  );
};

export default Bookmark;
