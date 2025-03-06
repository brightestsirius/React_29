import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRepos = async (username, page, perPage, signal) => {
  const { data, headers } = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      params: { per_page: perPage, page },
      signal,
    }
  );

  const linkHeader = headers.link || "";
  const hasNextPage = linkHeader.includes('rel="next"');

  return { repos: data, hasNextPage };
};

const fetchUserInfo = async (username, signal) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`, { signal });
  return data;
};

export const useGithubRepos = (username, page, perPage) => {
  return useQuery({
    queryKey: ["repos", username, page, perPage],
    queryFn: ({ signal }) => fetchRepos(username, page, perPage, signal),
    keepPreviousData: true,
  });
};

export const useGithubUserInfo = (username) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: ({ signal }) => fetchUserInfo(username, signal),
  });
};