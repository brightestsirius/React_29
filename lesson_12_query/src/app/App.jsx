import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GitHubPage from "../pages/GitHubPage";

import { queryClient } from "../shared/api/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<GitHubPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
