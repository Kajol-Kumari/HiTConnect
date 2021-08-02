import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Science from './science/science'

export default class SciencePage extends Component {
  render() {
    return (
      <div>
        <Science />
        <div className="hitk-tech-comm-logo">
          <div className="logo">
            <img src="../../images/science_logo.jpeg" alt="hitk-tech-comm-logo" className="club-logo-img"></img>
          </div>
          <div className="club-name">
            Science Club
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="team-member-heading">
            Team!
          </div>
          <div className="team-member-detail">
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Reeshik Sarkar</div>
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
              <div className="member-card-title">Totan Debnath</div>
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
              <div className="member-card-title">Sobhana Datta</div>
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
              <div className="member-card-title">Abhay Aryan</div>
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
              <div className="member-card-title">Piyush Kumar</div>
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
