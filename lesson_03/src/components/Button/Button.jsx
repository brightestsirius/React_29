import React from "react";

export default function Button({ title, clickFn }) {
  return <button onClick={clickFn}>{title}</button>;
}
