import { useState } from "react";
import { useCreatePostMutation } from "./../../store/features/postsSlice";

export default function PostsForm() {
  const [title, setTitle] = useState("");
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, body: "Test content", userId: 1 });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New post"
      />
      <button type="submit" disabled={isLoading}>
        Create
      </button>
    </form>
  );
}
