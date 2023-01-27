import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_DETAIL } from "../store/actions";
import { ReadButton } from "./Button";

const BookDetail = () => {
  const { detail } = useSelector((state) => state);
  console.log(detail);
  const dispatch = useDispatch();

  function handleCloseDetail() {
    dispatch({
      type: UPDATE_DETAIL,
      payload: null,
    });
  }
  return (
    detail && (
      <div className="fixed z-50 top-0 right-0 bottom-0 w-96 ">
        <div
          className="w-screen h-screen fixed opacity-30 bg-slate-900 inset-0 -z-10"
          onClick={handleCloseDetail}
        ></div>
        <div className="bg-slate-50 w-full h-full">
          <div className="text-2xl flex justify-between border-b p-4">
            Book Detail{" "}
            <button onClick={handleCloseDetail}>
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <img
              src={detail.volumeInfo.imageLinks?.thumbnail}
              alt=""
              className="w-full"
            />
            <h3 className="text-3xl">{detail.volumeInfo.title}</h3>
            <p>Author: {detail.volumeInfo.authors.join(", ")}</p>
            <p>Year: {detail.volumeInfo.publishedDate}</p>
            <p>Pages: {detail.volumeInfo.pageCount}</p>
            <p>Categories: {detail.volumeInfo.categories.join(", ")}</p>
            <ReadButton previewLink={detail.volumeInfo.previewLink} />
          </div>
        </div>
      </div>
    )
  );
};

export default BookDetail;
