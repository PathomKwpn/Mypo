import { useState } from "react";

import "./App.css";
import MainPage from "./MainPage";
import { GrobFood } from "./components/Projects/ProjectList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <MainPage />,
    },
    {
      path: "/Project-GrobFood",
      element: <GrobFood />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
