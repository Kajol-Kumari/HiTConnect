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
import PrivacyPolicyPage from '../privacy-policy-page/privacy-policy-page';
import TermsOfUsePage from '../terms-of-use-page/terms-of-use-page';
import GetInvolvedPage from '../get-involved-page/get-involved-page';
import RotaractClubPage from '../club-details/rotaract-details-page/rotaract-details-page';
import RegisteredUserPage from '../template/registered-page/registered-page';
import GhunghrooPage from '../club-details/ghughroo-page/ghughroo-page';
import NssPage from '../club-details/nss-page/nss-page';
class Main extends Component {
    render() {
        return (
            <div className="Container">
             
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/registered-user" component={RegisteredUserPage} />
                <Route exact path='/clubs-menu' component={ClubsMenuPage} />
                <Route exact path='/hitk-tech-community' component={HitkTechCommunityPage} />
                <Route exact path="/rotaract-club" component={RotaractClubPage}/>
                <Route exact path="/ghunghroo" component={GhunghrooPage}/>
                <Route exact path="/nss" component={NssPage} />
                <Route exact path='/signup' component={SignupPage} />
                <Route exact path='/blogs' component={BlogsPage} />
                <Route exact path='/create-blog' component = {CreateBlogPage} />
                <Route exact path="/notice-board" component={NoticeBoardPage} />
                <Route exact path="/feeds" component={FeedsPage} />
                <Route exact path="/opportunities" component={OpportunitiesPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route exact path="/terms" component={TermsOfUsePage} />
                <Route exact path="/get-involved" component={GetInvolvedPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          
        );
    }
}

export default withRouter(Main);