import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const GitHubRepos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 15;
  const username = "brightestsirius";

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        if (userData.public_repos) {
          setTotalPages(Math.ceil(userData.public_repos / itemsPerPage));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalPages();
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=${itemsPerPage}&page=${currentPage}`
        );
        const data = await response.json();

        if (data.length === 0 && currentPage !== 1) {
          navigate("/?page=1", { replace: true });
          return;
        }

        setRepos(data);

        const linkHeader = response.headers.get("Link");
        setHasNextPage(linkHeader && linkHeader.includes('rel="next"'));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [currentPage, navigate]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div>
      <h2>GitHub Repos ({username})</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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
          Page {currentPage} from {totalPages || "..."}
        </span>

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default GitHubRepos;