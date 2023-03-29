import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const loggedInUser = sessionStorage.getItem("authenticated");

  return (
    <div className="p-3 shadow-lg">
      <ul className="flex gap-5 justify-end font-bold ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts </Link>
        </li>
        <li>
          <Link to="/addposts">Add Posts </Link>
        </li>
        {!loggedInUser ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
