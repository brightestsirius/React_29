import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavigationBtn({ title, navPath }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () =>
    navigate(navPath, { state: { prevPath: pathname } });

  return <button onClick={handleClick}>Go to {title}</button>;
}
