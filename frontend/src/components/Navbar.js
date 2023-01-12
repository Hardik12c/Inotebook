import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {localStorage.getItem("token") ? (
            <Link className="btn btn-primary mx-2" to="/login" onClick={()=>(localStorage.removeItem('token'))} role="button">
              Logout
            </Link>
          ) : (
            <div>
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
              <Link
                className="btn btn-primary mx-2"
                to="/register"
                role="button"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
