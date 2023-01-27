export const BookMarkButton = ({ bookId }) => {
  function handleBookMark() {
    let bookMarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (!bookMarks.includes(bookId)) {
      bookMarks.push(bookId);
      localStorage.setItem("bookMarks", bookMarks);
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

export const MoreInfoButton = () => {
  return (
    <button className="w-full text-2xl py-2 px-4 text-sky-50 bg-sky-400 rounded-2xl  hover:bg-sky-500 transition-colors ease-in-out duration-300">
      More Info
    </button>
  );
};
