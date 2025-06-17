import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import BuyMeACoffee from "./components/BuyMeACoffee";
import CertificateSlider from "./components/CertificateSlider";
import Projects from "./components/Projects";
import "./ProjectSection.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <AboutSection />
      <Experience />
      <Education />
      <Projects />
      <CertificateSlider />
      <BuyMeACoffee />
    </>
  );
};

export default App;
