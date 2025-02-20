import React, { lazy, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));
const TodosRouteLazy = lazy(() => import("./routes/TodosRoute"));
const TodoRouteLazy = lazy(() => import("./routes/TodoRoute"));
const ErrorRouteLazy = lazy(() => import("./routes/ErrorRoute"));
const AdminRouteLazy = lazy(() => import("./routes/AdminRoute"));

import AuthGuard from "./HOC/AuthGuard";

import AppContext from "./contexts/AppContext";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      children: [
        {
          path: `/`,
          element: <HomeRouteLazy />,
        },
        {
          path: `todos`,
          element: <TodosRouteLazy />,
        },
        {
          path: `todos/:id`,
          element: (
            <AuthGuard>
              <TodoRouteLazy />
            </AuthGuard>
          ),
        },
        {
          path: `admin`,
          element: (
            <AuthGuard>
              <AdminRouteLazy />
            </AuthGuard>
          ),
        },
      ],
      errorElement: <ErrorRouteLazy />,
    },
  ]);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}