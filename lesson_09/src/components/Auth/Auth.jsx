import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";
import Button from "./../Button/Button";

export default function Auth() {
  const { isAuth, setIsAuth } = useContext(AppContext);

  const handleClick = () => setIsAuth((prevState) => !prevState);

  return (
    <Button
      handleClick={handleClick}
      title={isAuth ? `Logout` : `Login`}
    ></Button>
  );
}
