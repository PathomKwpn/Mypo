import { useState } from "react";
import ScrollToTop from "./ScrollTotop";
import "./App.css";
import MainPage from "./MainPage";
import { GrobFood, AirbnbClone } from "./components/Projects/ProjectList";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/Home",
  //     element: <MainPage />,
  //   },
  //   {
  //     path: "/Project-GrobFood",
  //     element: <GrobFood />,
  //   },
  //   {
  //     path: "/Project-AirbnbClone",
  //     element: <AirbnbClone />,
  //   },
  // ]);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Project-GrobFood" element={<GrobFood />} />
          <Route path="/Project-AirbnbClone" element={<AirbnbClone />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
