import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UPDATE_SEARCH_RESULT } from "../store/actions";
import searchBook from "../utils/searchBook";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("jwt_access_token");
    toast("Logged Out", { type: "info" });

    navigate("/login");
  }

  async function search(e) {
    let text = e.target.value;

    if (!text) {
      dispatch({
        type: UPDATE_SEARCH_RESULT,
        payload: { total: 0, books: [] },
      });

      return;
    }

    let data = await searchBook(text);

    let total = data.totalItems;
    let books = data.items || [];

    dispatch({
      type: UPDATE_SEARCH_RESULT,
      payload: { total, books },
    });
  }

  return (
    <header className="py-2">
      <nav className="container mx-auto gap-12 flex justify-between items-center py-2">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>

        <form className="w-full">
          <input
            type="search"
            placeholder="Search book"
            className="py-2 px-4 bg-slate-200 w-full rounded-3xl hover:bg-slate-300"
            onChange={search}
          />
        </form>

        <button
          className="bg-teal-400 py-2 px-4 rounded-lg text-slate-50 hover:bg-teal-600 transition-all duration-300 ease-in-out"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      <HeaderBottom />
    </header>
  );
};

export default Header;
