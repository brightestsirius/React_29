import React, { lazy, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import UserGuard from "./HOC/UserGuard";
import ErrorRoute from "./routes/ErrorRoute";

import AppContext from "./contexts/AppContext";

const HomeRouteLazy = lazy(() => import("./routes/HomeRoute"));
const TodosRouteLazy = lazy(() => import("./routes/TodosRoute"));
const TodoRouteLazy = lazy(() => import("./routes/TodoRoute"));
const AdminRouteLazy = lazy(() => import("./routes/AdminRoute"));

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
          element: <TodoRouteLazy />,
        },
        {
          path: `admin`,
          element: (
            <UserGuard>
              <AdminRouteLazy />
            </UserGuard>
          ),
        },
      ],
      errorElement: <ErrorRoute />,
    },
  ]);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
