import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header/Header";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location, location.state);
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
