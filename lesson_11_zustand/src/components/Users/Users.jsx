import React, { useEffect } from "react";
import useStoreUsers from "../../store/storeUsers";

export default function Users() {
  console.log(`in Users`);
  const users = useStoreUsers((state) => state.users);
  const fetchUsers = useStoreUsers((state) => state.fetchUsers);

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
