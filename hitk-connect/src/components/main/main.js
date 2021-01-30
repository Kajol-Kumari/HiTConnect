import React, { Component } from 'react';
import {Switch,Route, withRouter } from 'react-router-dom'
import Home from '../home/home';
import ClubsMenu from '../clubs-menu/clubs-menu';
import NotFound from '../404/not_found';
import LoginPage from '../auth/login-page/login-page';
class Main extends Component {
    render() {
        return (
            <div className="Container">
             
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path='/club-menu' component={() => <ClubsMenu clubs={ClubsMenu} />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          
        );
    }
}

export default withRouter(Main);