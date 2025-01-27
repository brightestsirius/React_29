import React, { useState, useRef, useEffect } from "react";

import { USER } from "../../mockData/mockData";
// 🟢🔴🔄

export default function User() {
  const [user, setUser] = useState(USER);
  const [isEditing, setIsEditing] = useState(false);

  const inputEmail = useRef();

  const toggleEditting = () => setIsEditing((prevState) => !prevState);

  const handleSaveChanges = () => {
    toggleEditting();
    setUser((prevState) => ({ ...prevState, email: inputEmail.current.value }));
  };

  useEffect(() => {
    console.log(`🟢 Send email to: ${user.email}`);
    const intervalId = setInterval(() => {
      console.log(`🔄 RESEND email to: ${user.email}`);
    }, 1500);

    return () => {
      clearInterval(intervalId);
      console.log(`🔴 Stop sending email to: ${user.email}`);
    };
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
          ref={inputEmail}
        />{" "}
        {isEditing ? (
          <button onClick={handleSaveChanges}>Save changes</button>
        ) : (
          <button onClick={toggleEditting}>Change email</button>
        )}
      </li>
    </ul>
  );
}