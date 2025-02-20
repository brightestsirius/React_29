import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AppContext from "../contexts/AppContext";

export default function AuthGuard({ children }) {
  const { isAuth } = useContext(AppContext);
  const location = useLocation();

  if (!isAuth) return <Navigate to={"/"} replace state={ {prevPath: location.pathname} } />;
  return children;
}