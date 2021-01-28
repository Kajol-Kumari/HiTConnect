import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">HITConnect</h1>
          <address>
            <i className="fas fa-map-marker-alt"></i> 505 Simpson Square, 505
            Simpson Square, 505 Simpson Square
            <br />
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Navigation</h2>

            <ul className="nav__ul">
              <li>
                <a href="/about-us">About</a>
              </li>

              <li>
                <a href="/broadcasts">Broadcasts</a>
              </li>

              <li>
                <a href="/resources">Resources</a>
              </li>

              <li>
                <a href="/contact-us">Contact</a>
              </li>

              <li>
                <a href="/faqs">FAQs</a>
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
      </footer>

      <div className="cprt_text ">
        <p className="cprt py-2">Copyright © 2020 HITConnect</p>
      </div>
    </div>
  );
};

export default Footer;
