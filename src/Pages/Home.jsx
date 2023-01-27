import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Result from "../Components/Result";
import BookDetail from '../Components/BookDetail';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("jwt_access_token");

    if (!token) navigate("/login");
  }, []);
  return (
    <div>
      <Header />
      <Result />
      <BookDetail />
    </div>
  );
};

export default Home;
