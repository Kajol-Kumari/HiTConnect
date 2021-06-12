import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeMobileMenu = () => setIsNavOpen(false);
  return (
    <Fragment>
      <nav className="header-div">
        <NavLink to="/" className="navbar-logo">
          <img src="./images/hitconnect.png" alt="logo" width="45px" height="45px"/>
        </NavLink>
        <div className="menu-icon" onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isNavOpen ? "nav-menu active" : "nav-menu"}>
          <li className="header-item">
            <NavLink
              activeClassName="active-link"
              to="/"
              className="header-links"
              onClick={closeMobileMenu}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="header-item header-partition">|</li>
          <li className="header-item">
            <NavLink
              activeClassName="active-link"
              to="/clubs-menu"
              className="header-links"
              onClick={closeMobileMenu}
              exact
            >
              Clubs
            </NavLink>
          </li>
          <li className="header-item header-partition">|</li>
          <li className="header-item">
            <NavLink
              activeClassName="active-link"
              to="/blogs"
              className="header-links"
              onClick={closeMobileMenu}
              exact
            >
              Blogs
            </NavLink>
          </li>
          <li className="header-item header-partition">|</li>
          <li className="header-item">
            <NavLink
              activeClassName="active-link"
              to="/feeds"
              className="header-links"
              onClick={closeMobileMenu}
              exact
            >
              Feeds
            </NavLink>
          </li>
          <li className="header-item header-partition">|</li>
          <li className="header-item">
            <NavLink
              activeClassName="active-link"
              to="/notice-board"
              className="header-links"
              onClick={closeMobileMenu}
              exact
            >
              Notice Board
            </NavLink>
          </li>
          <li className="header-item">
            <Link
              to="/login"
              className="header-links-mobile"
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

export default Header;
