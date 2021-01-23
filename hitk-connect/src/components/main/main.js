import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Home from '../home/home';
import Header from '../template/header/header';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                {/* <Footer/> */}
            </div>
        );
    }
}

export default withRouter(Main);