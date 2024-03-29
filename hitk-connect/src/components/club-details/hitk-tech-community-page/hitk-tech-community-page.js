import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import HitkTechCommunity from './hitk-tech-community/hitk-tech-community'
import "./hitk-tech-community-page.css";

export default class HitkTechCommunityPage extends Component {
  render() {
    return (
      <div>
        <HitkTechCommunity />
        <div className="hitk-tech-comm-logo">
          <div className="logo">
            <img src="../../images/hitk-tech-comm/hitk_tech_comm_logo.png" alt="hitk-tech-comm-logo" className="club-logo-img"></img>
          </div>
          <div className="club-name">
            Hitk Tech Community
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="team-member-heading">
            Team!
          </div>
          <div className="team-member-detail">
            <div className="member-card">
              <img src="./images/profile.png" alt="dummy_img" width="200" height="200" />
              <div className="member-card-title">Kajol Kumari</div>
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
              <div className="member-card-title">Rohit Aggarwal</div>
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
