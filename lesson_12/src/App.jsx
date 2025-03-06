import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      children: [
        {
          path: `/`,
          element: <HomeRouteLazy />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
