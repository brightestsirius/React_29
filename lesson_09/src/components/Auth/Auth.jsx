import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";

export default function Auth() {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const handleClick = () => setIsAuth((prevState) => !prevState);

  return <button onClick={handleClick}>{isAuth ? `Logout` : `Login`}</button>;
}
