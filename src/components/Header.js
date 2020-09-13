import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_NAME } from "../constants/project";

function Header({ transparent }) {
  return (
    <header
      id="header"
      className={`fixed-top  ${transparent ? "header-transparent" : null}`}
    >
      <div className="container">
        <div className="logo float-left">
          <h1 className="text-light">
            <Link to="/">
              <span>{PROJECT_NAME}</span>
            </Link>
          </h1>
        </div>

        <nav className="nav-menu float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="drop-down">
              <Link to="/services">Services</Link>
              <ul>
                <li>
                  <Link to="/services/estate-agent">Estate Agent</Link>
                </li>
                <li>
                  <Link to="/services/swimming-pool">Swimming Pool</Link>
                </li>
                <li>
                  <Link to="/services/electro-mechanical">Electro Mechanical</Link>
                </li>
                <li>
                  <Link to="/services/gardening">Gardening</Link>
                </li>
                <li>
                  <Link to="/services/maintenance">Maintenance</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
