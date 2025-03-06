import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://679286cdcf994cc6804a5368.mockapi.io/todos";

const fetchTodos = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // Оновлення кешу
    },
  });

  return { todos, error, isLoading, deleteTodo: mutation.mutate };
};