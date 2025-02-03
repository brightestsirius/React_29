import React from "react";

export default function ListButton({ title, handleClick }) {
  return <button onClick={handleClick}>{title}</button>;
}
