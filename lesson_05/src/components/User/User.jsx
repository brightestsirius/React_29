import React, { useState, useRef, useEffect } from "react";

import { USER_DEFAULT } from "./../../mockData/mockData";

export default function User() {
  const [user, setUser] = useState(USER_DEFAULT);
  const [isEditing, setIsEditing] = useState(false);

  const inputEmail = useRef();

  const toggleEditing = () => setIsEditing((prevState) => !prevState);

  const handleSaveChanges = () => {
    setUser((prevState) => ({ ...prevState, email: inputEmail.current.value }));
    toggleEditing();
  };

  const handleUserDelete = () => setUser({});

  useEffect(() => {
    console.log(`🟢 in useEffect for componentDidMount`);

    return () => {
      console.log(`🔴 in useEffect for componentWillUnmount`);
    };
  }, []);

  useEffect(() => {
    console.log(`🔄 Send email to`, user.email);

    return () => {
        console.log(`🔴🔄 Stop sending email to ${user.email} before update`);
    }
  }, [user.email]);

  return Object.keys(user).length ? (
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
          <button onClick={toggleEditing}>Change email</button>
        )}
      </li>
      <li>
        <button onClick={handleUserDelete}>Delete user</button>
      </li>
    </ul>
  ) : null;
}
