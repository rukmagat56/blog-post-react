import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("authenticated");
    if (loggedInUser) {
      sessionStorage.removeItem("authenticated");
      navigate("/login");
    }
  }, []);
  return <></>;
};

export default Index;
