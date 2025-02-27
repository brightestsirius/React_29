import React, { useEffect } from "react";
import useUsersStore from "../../store/usersStore";

export default function Users() {
  const { users, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  ) : null;
}
