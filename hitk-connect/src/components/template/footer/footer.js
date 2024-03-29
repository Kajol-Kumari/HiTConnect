import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">
          <img src="./images/hitconnect.png" alt="logo" width="30px" height="30px"/>
            &nbsp; HITConnect
            </h1>
          <address>
            <i className="fas fa-map-marker-alt"></i> Heritage Institute of Technology, Anandapur, Kolkata, West Bengal - 700107
            <br />
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Navigation</h2>

            <ul className="nav__ul">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/clubs-menu">Clubs</a>
              </li>

              <li>
                <a href="/blogs">Blogs</a>
              </li>

              <li>
                <a href="/notice-board">Notice Board</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Other</h2>

            <ul className="nav__ul">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>

              <li>
                <a href="/terms">Terms of Use</a>
              </li>

              <li>
                <a href="/get-involved">Get Involved</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="cprt_text ">
          <p className="cprt py-2">Copyright © 2021 HITConnect</p>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
