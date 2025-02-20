import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header/Header";
import Loading from '././../components/Loading/Loading'

export default function Layout() {
  const location = useLocation();
  //console.log(location);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
