import { UPDATE_BOOKMARKS, UPDATE_DETAIL } from "../store/actions";
import { useDispatch } from "react-redux";

export const BookMarkButton = ({ book }) => {
  const dispatch = useDispatch();

  function handleBookMark() {
    let bookMarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (!bookMarks.find((b) => b.id === book.id)) {
      bookMarks.push({
        id: book.id,
        title: book.volumeInfo.title,
        publisher: book.volumeInfo.publisher,
        previewLink: book.volumeInfo.previewLink,
      });
      localStorage.setItem("bookmarks", JSON.stringify(bookMarks));

      dispatch({
        type: UPDATE_BOOKMARKS,
        payload: bookMarks,
      });
    }
  }

  return (
    <button
      onClick={handleBookMark}
      className="w-full text-2xl py-2 px-4 bg-yellow-400 rounded-2xl hover:bg-yellow-300 transition-colors ease-in-out duration-300"
    >
      Bookmark
    </button>
  );
};

export const ReadButton = ({ previewLink }) => {
  return (
    <a
      href={previewLink}
      target="_blank"
      className="text-center block w-full text-2xl py-2 px-4 text-slate-50 bg-slate-400 rounded-2xl  hover:bg-slate-500 transition-colors ease-in-out duration-300"
    >
      Read
    </a>
  );
};

export const MoreInfoButton = ({ book }) => {
  const dispatch = useDispatch();

  function handleOpenDetail() {
    dispatch({ type: UPDATE_DETAIL, payload: book });
  }

  return (
    <button
      onClick={handleOpenDetail}
      className="w-full text-2xl py-2 px-4 text-sky-50 bg-sky-400 rounded-2xl  hover:bg-sky-500 transition-colors ease-in-out duration-300"
    >
      More Info
    </button>
  );
};
