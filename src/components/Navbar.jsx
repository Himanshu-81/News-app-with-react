import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={`navbar navbar-${darkMode ? "dark" : "white"}
      }`}
      style={{ backgroundColor: darkMode ? "black" : "grey" }}
    >
      <nav className="container navbar-expand-lg">
        <Link className="navbar-brand" to="#">
          <img
            src="./src/images/news.png"
            alt=""
            style={{ width: "60px", marginInline: "15px" }}
          />
          NewsGeek
        </Link>
        <div className="form-check form-switch">
          <input
            onClick={toggleDarkMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="dark"
            style={{ marginTop: "0.75em", display: "none" }}
          />
          <label
            htmlFor="dark"
            className={`form-check-label text-${darkMode ? "white" : "dark"}`}
            style={{ fontSize: "26px", cursor: "pointer" }}
          >
            {darkMode ? (
              <i class="fa-regular fa-sun"></i>
            ) : (
              <i class="fa-regular fa-moon"></i>
            )}
          </label>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/sports">
              Sports
            </Link>
            <Link className="nav-item nav-link" to="/entertainment">
              Entertainment
            </Link>
            <Link className="nav-item nav-link" to="/technical">
              Technology
            </Link>
            <Link className="nav-item nav-link" to="/science">
              Science
            </Link>
            <Link className="nav-item nav-link" to="/business">
              Business
            </Link>
            <Link className="nav-item nav-link" to="/health">
              Health
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
