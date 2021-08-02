import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Nss from './nss/nss'

export default class NssPage extends Component {
  render() {
    return (
      <div>
        <Nss />
        <div className="hitk-tech-comm-logo">
          <div className="logo">
            <img src="../../images/nss_logo.png" alt="hitk-tech-comm-logo" className="club-logo-img"></img>
          </div>
          <div className="club-name">
            National Service Scheme
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="team-member-heading">
            Team!
          </div>
          <div className="team-member-detail">
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Debolina Banerjee</div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kajol-kumari-73245b166/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="https://github.com/Kajol-Kumari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="kajolkumarisingh222@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Alisha Bag</div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kajol-kumari-73245b166/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="https://github.com/Kajol-Kumari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="kajolkumarisingh222@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Alisha Bag</div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kajol-kumari-73245b166/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="https://github.com/Kajol-Kumari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="kajolkumarisingh222@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Sudeepta Guha</div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kajol-kumari-73245b166/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="https://github.com/Kajol-Kumari" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a> &nbsp;
                <a href="kajolkumarisingh222@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
