import React, { Component } from 'react';
import {Switch,Route, withRouter } from 'react-router-dom';
import NotFound from '../404/not_found';
import LoginPage from '../auth/login-page/login-page';
import SignupPage from '../auth/signup-page/signup-page';
import HomePage from '../home/home-page/home-page';
import ClubsMenuPage from '../clubs-menu-page/clubs-menu-page';
import BlogsPage from '../blogs-page/blogs-page';
import NoticeBoardPage from '../notice-board-page/notice-board-page';
import CreateBlogPage from '../blogs-page/create-blog-page/create-blog-page';
import FeedsPage from '../feeds-page/feeds-page';
import OpportunitiesPage from '../opportunities-page/opportunities-page';
import ProjectsPage from '../projects-page/projects-page';
import HitkTechCommunityPage from '../club-details/hitk-tech-community-page/hitk-tech-community-page';
class Main extends Component {
    render() {
        return (
            <div className="Container">
             
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path='/clubs-menu' component={ClubsMenuPage} />
                <Route exact path='/clubs-menu/hitk-tech-community' component={HitkTechCommunityPage} />
                <Route exact path='/signup' component={SignupPage} />
                <Route exact path='/blogs' component={BlogsPage} />
                <Route exact path='/create-blog' component = {CreateBlogPage} />
                <Route exact path="/notice-board" component={NoticeBoardPage} />
                <Route exact path="/feeds" component={FeedsPage} />
                <Route exact path="/opportunities" component={OpportunitiesPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          
        );
    }
}

export default withRouter(Main);