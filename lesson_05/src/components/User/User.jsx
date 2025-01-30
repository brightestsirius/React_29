import React, { useState, useRef, useEffect } from "react";

import { USER_DEFAULT } from "./../../mockData/mockData";

// 🟢🔴🔄

export default function User() {
  const [user, setUser] = useState(USER_DEFAULT);
  const [isEditing, setIsEditing] = useState(false);

  const inputEmailRef = useRef();

  const toggleEditing = () => setIsEditing((prevState) => !prevState);

  const handleChangeEmail = () => {
    setUser((prevState) => ({
      ...prevState,
      email: inputEmailRef.current.value,
    }));
    toggleEditing();
  };

  useEffect(() => {
    console.log(`🟢 Send email to ${user.email}`);

    return () => {
        console.log(`🔴 Stop sending email to ${user.email}`);
    }
  }, [user.email]);

  return (
    <ul>
      <li>Name: {user.name}</li>
      <li>
        Email:{" "}
        <input
          type="text"
          defaultValue={user.email}
          disabled={!isEditing}
          ref={inputEmailRef}
        />
        {isEditing ? (
          <button onClick={handleChangeEmail}>Save changes</button>
        ) : (
          <button onClick={toggleEditing}>Change email</button>
        )}
      </li>
    </ul>
  );
}
