import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home";
import About from "./components/About/About";
import ProjectsPage from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <ProjectsPage />
      <Contact />
    </>
  );
}

export default App;
