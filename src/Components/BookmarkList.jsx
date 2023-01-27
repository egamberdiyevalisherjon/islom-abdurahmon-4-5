import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_BOOKMARKS } from "../store/actions";
import Bookmark from "./Bookmark";

const BookmarkList = () => {
  const { bookmarks } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    dispatch({
      type: UPDATE_BOOKMARKS,
      payload: bookmarks,
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} bookmarks={bookmarks} />
      ))}
    </div>
  );
};

export default BookmarkList;
