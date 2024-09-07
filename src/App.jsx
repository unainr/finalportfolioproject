import { useState } from "react";
import Navbar from "./components/pages/Navbar";
import Banner from "./components/pages/Banner";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
