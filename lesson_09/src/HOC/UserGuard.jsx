import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AppContext from "./../contexts/AppContext";

export default function UserGuard({ children }) {
  const { isAuth } = useContext(AppContext);
  const { pathname } = useLocation();
  if (!isAuth) return <Navigate to={"/"} state={{ prevPath: pathname }} />;
  return children;
}