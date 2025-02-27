import { create } from "zustand";

const useStoreUsers = create((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/users`),
        response = await request.json();

      set({ users: response });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStoreUsers;
