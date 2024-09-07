import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import "../css/Respon.css";
import images from "../../assets/images/logo34.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    setDarkMode(isDarkModeEnabled);
  }, []);

  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    setDarkMode(true);
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    setDarkMode(false);
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <div>
      <header className="header_wrapper">
        <nav
          className={`navbar navbar-expand-lg ${
            scrolled ? "header-scrolled" : ""
          } fixed-top ${darkMode ? "dark-mode" : ""}`}
        >
          <div className="container ">
            <a className="navbar-brand" href="#">
              <img src={images} className="img-fluid" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item  ">
                  <button
                    id="dark-mode-toggle"
                    className="main-btn btn-sm"
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? (
                      <i className="fas fa-sun"></i>
                    ) : (
                      <i className="fas fa-moon"></i>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
