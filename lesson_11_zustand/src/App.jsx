import React from "react";
import BearInfo from "./components/BearInfo/BearInfo";
import BearCounter from "./components/BearCounter/BearCounter";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <>
      <BearCounter />
      <hr />
      <BearInfo />
      <hr />
      <Users />
    </>
  );
}
