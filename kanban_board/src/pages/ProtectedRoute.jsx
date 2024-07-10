import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      return;
    } else {
      navigate("/login");
    }
  });
  return <div>{children}</div>;
};
