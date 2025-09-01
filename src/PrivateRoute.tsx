import React from "react";
import { Navigate } from "react-router-dom";

interface IRoute {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: IRoute) {
  const token = localStorage.getItem("token"); // TODO keep it in Cookie

  if (!token) return <Navigate to="/login" replace />;

  return children;
}
