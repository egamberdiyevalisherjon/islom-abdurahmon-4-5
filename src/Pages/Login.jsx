import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!values.email || !values.password) {
      return toast("Email and password are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    }
    let { data } = await axios.post("https://reqres.in/api/login", values);

    if (data.token) {
      localStorage.setItem("jwt_access_token", data.token);
      toast("Logged In Successfully", { type: "success" });
      navigate("/");
    }
  }

  function handleChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    let token = localStorage.getItem("jwt_access_token");

    if (token) {
      toast("Logged In", { type: "info" });
      navigate("/");
    }
  }, [toast, navigate]);

  return (
    <div
      id="login-page-wrapper"
      className="min-h-screen flex items-center  justify-center bg-rose-400"
    >
      <form
        onSubmit={handleLogin}
        className="bg-slate-50 p-12 w-1/2 flex flex-col  gap-8"
      >
        <div className="flex items-center">
          <label className="w-1/2" htmlFor="email">
            Your Email
          </label>
          <input
            className="bg-slate-700 text-slate-50 w-1/2 py-2 px-4"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/2" htmlFor="password">
            Your Password
          </label>
          <input
            className="bg-slate-700 text-slate-50 w-1/2 py-2 px-4"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <button className="bg-yellow-400 py-2 px-4 hover:bg-yellow-300 rounded-xl ease-in-out transition-all duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
