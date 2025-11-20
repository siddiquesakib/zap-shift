import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <h1>loadin.....</h1>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoutes;
