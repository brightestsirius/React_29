import React, { useState, useEffect, useRef } from "react";

import { USER } from "./../../mockData/user";

// 🟢🔄🔴

export default function User() {
  const [user, setUser] = useState(USER);
  const [isEditing, setIsEditing] = useState(false);

  const emailInput = useRef();

  useEffect(() => {
    console.log(`🟢 Send email to: ${user.email}`);

    return () => {
        console.log(`🔴 Stop sending email to: ${user.email}`);
    }
  }, [user.email]);

  const handleChangeEmail = () => {
    setIsEditing(true);
  };

  const handleSaveChanged = () => {
    setIsEditing(false);
    setUser((prevState) => ({ ...prevState, email: emailInput.current.value }));
  };

  return (
    <>
      <ul>
        <li>Name: {user.name}</li>
        <li>
          Email:{" "}
          <input
            type="text"
            defaultValue={user.email}
            disabled={!isEditing}
            ref={emailInput}
          />
          {isEditing ? (
            <button onClick={handleSaveChanged}>Save changes</button>
          ) : (
            <button onClick={handleChangeEmail}>Change email</button>
          )}
        </li>
      </ul>
    </>
  );
}
