import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Collapse,
  Jumbotron,
  NavItem
} from "reactstrap";

import './header.css';
 import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div >
        <Navbar dark expand="md">
          <div className="container">
            {/* <NavbarToggler onClick={this.toggleNav} /> */}
            <NavbarBrand className="mr-auto" href="/">
            <img className="icon" src="/connect1.png" height="40" width="50"  alt='icon' />
              Heritage connect
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem> 
                     <NavItem>
                        <NavLink className="nav-link" to='/about-us'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact-us'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Hello,welcome to heritage connect.</h1>
                <p>Get to know about all the clubs that we have at HIT-K</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
