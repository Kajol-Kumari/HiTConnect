import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeMobileMenu = () => setIsNavOpen(false);

  const isLoggedInMobile = () => {
    if (localStorage.getItem("token")) {
      return <li className="nav-item">
        <Link
          to="/login"
          className="nav-links-mobile"
          onClick={() => { closeMobileMenu(); LogOut();}}
          exact
        >
          Logout
        </Link>
      </li>
    } else {
      return <li className="nav-item">
        <Link
          to="/login"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
          exact
        >
          Login/Signup
        </Link>
      </li>
    }
  }

  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <Link to="/login" onClick={LogOut}>
        <button className="nav-login-button">Logout</button>
      </Link>
    } else {
      return <Link to="/login">
        <button className="nav-login-button">Login/Signup</button>
      </Link>
    }
  }

  const LogOut = () => {
    localStorage.removeItem("token");
    toast.success('Logged Out successfully!')
  }

  return (
    <Fragment>
      <nav className="navbar-div">
        <NavLink to="/" className="navbar-logo">
          <img src="./images/hitconnect.png" alt="logo" width="45px" height="45px" />
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
              to="/blogs"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Blogs
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/feeds"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Feeds
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/opportunities"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Opportunities
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item partition">|</li>
          <li
            className="nav-item"
          >
            <NavLink
              activeClassName="active-link"
              to="/notice-board"
              className="nav-links"
              onClick={closeMobileMenu}
              exact
            >
              Notice Board
            </NavLink>
          </li>
          {isLoggedInMobile()}
        </ul>
        {isLoggedIn()}
      </nav>
    </Fragment>
  );
};

export default Navbar;
