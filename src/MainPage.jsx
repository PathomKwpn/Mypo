import React from "react";
import {
  Home,
  About,
  NavbarHome,
  Contact,
  ProjectsPage,
  Social,
} from "./components";
const MainPage = () => {
  return (
    <>
      <NavbarHome />
      <Social />
      <Home />
      <About />
      <ProjectsPage />
      <Contact />
    </>
  );
};

export default MainPage;
