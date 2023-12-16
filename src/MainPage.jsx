import React from "react";
import { Home, About, Navbar, Contact, ProjectsPage } from "./components";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ProjectsPage />
      <Contact />
    </>
  );
};

export default MainPage;
