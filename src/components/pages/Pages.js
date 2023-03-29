import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/Navbar";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";
import Single from "./Single";
import Logout from "./Logout";
import AddPost from "./AddPost";
const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Single />} />
        <Route path="/addposts" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      
    </>
  );
};

export default Pages;
