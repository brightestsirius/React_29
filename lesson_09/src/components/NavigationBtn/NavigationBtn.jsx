import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBtn({ title, navPath }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(navPath);

  return <button onClick={handleClick}>Go to {title}</button>;
}
