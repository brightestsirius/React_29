import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import TodosRoute from "./routes/TodosRoute";
import TodoRoute from './routes/TodoRoute'
import ErrorRoute from "./routes/ErrorRoute";

import Layout from "./pages/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      children: [
        {
          path: `/`,
          element: <HomeRoute />,
        },
        {
          path: `todos`,
          element: <TodosRoute />,
        },
        {
          path: `todos/:id`,
          element: <TodoRoute />
        },
      ],
      errorElement: <ErrorRoute />,
    }
  ]);

  return <RouterProvider router={router} />;
}