import React, { useState } from "react";

// import Todos from './components/Todos/Todos'
import User from "./components/User/User";

export default function App() {
  const [showUser, setShowUser] = useState(true);

  const toggleUser = () => setShowUser((prevState) => !prevState);

  return (
    <>
      {/* <Todos /> */}
      <button onClick={toggleUser}>Show/Hide User</button>
      {showUser && <User />}
    </>
  );
}