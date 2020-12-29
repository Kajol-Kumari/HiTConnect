import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
//import Home from '../home/home';
import Header from '../template/header/header';
import Footer from '../template/footer/footer';
import Home from '../home/home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';
import Contact from '../contact-us/contact-us';
import About from '../about-us/about-us';

// import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about-us' component={About} />
                    <Route exact path='/contact-us' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);