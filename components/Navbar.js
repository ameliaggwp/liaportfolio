import React from "react";
import About from "./About";
import Gallery from "./gallery";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a to={Gallery} className="navbar-brand">
            La La Lia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            dataBsToggle="collapse"
            dataBsTarget="#navbarNav"
            ariaControls="navbarNav"
            ariaExpanded="false"
            ariaLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" ariaCurrent="page" to={About}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" to={Gallery}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  ariaDisabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
