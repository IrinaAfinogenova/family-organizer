import React from "react";
import { Navigate } from "react-router-dom";
import { useFetchUser } from "./hooks/useFetchUser";

interface IRoute {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: IRoute) {
  const { user, loading } = useFetchUser();

  if (loading) return <p>Checking auth...</p>;

  if (!user && !loading) return <Navigate to="/login" replace />;

  return children;
}
