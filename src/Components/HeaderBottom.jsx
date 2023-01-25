import React from "react";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const { total } = useSelector(({ search }) => search);
  return (
    <div className="flex items-center justify-around py-2 border-y-2">
      <p>
        Showing {total} Result{total > 1 && "s"}
      </p>

      <button className="bg-teal-400 py-2 px-4 rounded-lg text-slate-50 hover:bg-teal-600 transition-all duration-300 ease-in-out">
        Logout
      </button>
    </div>
  );
};

export default HeaderBottom;
