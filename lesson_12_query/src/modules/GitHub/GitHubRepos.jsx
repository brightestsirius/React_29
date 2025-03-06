import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGithubRepos, useGithubUserInfo } from "./hooks/useGithubRepos";

const GitHubRepos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = "brightestsirius";
  const perPage = 15;
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data: userInfo, isError: userError } = useGithubUserInfo(username);
  const { data, isFetching, isError } = useGithubRepos(username, currentPage, perPage);

  const totalPages = userInfo ? Math.ceil(userInfo.public_repos / perPage) : "?";
  const hasNextPage = data?.hasNextPage;

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  if (userError || isError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h2>GitHub Repos {username}</h2>
      
      {isFetching && <p>Loading...</p>}

      {data?.repos && (
        <ul>
          {data.repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} from {totalPages}
        </span>

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default GitHubRepos;