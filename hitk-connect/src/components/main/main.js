import React, { Component } from 'react';
import {Switch,Router,Route, withRouter } from 'react-router-dom'
import Home from '../home/home';
import Footer from '../template/footer/footer';
import Login from '../auth/login/login';
import ClubsMenu from '../clubs-menu/clubs-menu';
class Main extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
         
        
        return (
            <div className="Container">
             
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                {/* <Route exact path='/club-menu' component={() => <ClubsMenu clubs={CLUBS} />} /> */}
              </Switch>
            </div>
          
        );
    }
}

export default withRouter(Main);