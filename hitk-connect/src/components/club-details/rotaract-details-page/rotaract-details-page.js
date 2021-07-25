import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import "./rotaract-details-page.css";
import RotaractClub from './rotaract-page/rotaract-page';

export default class RotaractClubPage extends Component {
  render() {
    return (
      <div>
        <RotaractClub />
        <div className="hitk-tech-comm-logo">
          <div className="logo">
            <img src="../../images/rotaract/rotaract_logo.png" alt="hitk-tech-comm-logo" className="club-logo-img"></img>
          </div>
          <div className="club-name">
            Rotaract Club of HITK
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="team-member-heading">
            Team!
          </div>
          <div className="team-member-detail">
            
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
