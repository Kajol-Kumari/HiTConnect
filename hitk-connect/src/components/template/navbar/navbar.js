import React, {Fragment, useState} from "react";
import {NavLink, Link} from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeMobileMenu = () => setIsNavOpen(false);
  return (
    <Fragment>
      <nav className="navbar-div">
        <NavLink to="/" className="navbar-logo">
          HITConnect
        </NavLink>
        <div className="menu-icon" onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isNavOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/clubs-menu"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Clubs
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/resources"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Blogs
            </NavLink>
          </li>

          <li className="nav-item partition">|</li>
          <li
            className="nav-item"
          >
            <NavLink
              activeClassName="active-link"
              to="/broadcasts"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Notice Board
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
              exact
            >
              Login/Signup
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="nav-login-button">Login/Signup</button>
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
