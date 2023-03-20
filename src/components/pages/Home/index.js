import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("authenticated");
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Home</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-4xl">Welcome!!!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default Index;
