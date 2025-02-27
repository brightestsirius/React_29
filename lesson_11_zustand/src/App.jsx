import React from "react";

import Features from "./components/Features/Features";
import Statistics from "./components/Statistics/Statistics";
import Bears from "./components/Bears/Bears";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <>
      <Features />
      <Statistics />
      <Bears />
      <hr />
      <Users />
    </>
  );
}
