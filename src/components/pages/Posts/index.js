import React, { useEffect} from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
const Posts = () => {


  //validating user
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("authenticated");
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);
  return (
    <>
     <Pagination/>
    </>
  );
};

export default Posts;
