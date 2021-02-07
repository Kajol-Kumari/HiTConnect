import React, { Component } from 'react'
import Header from '../template/header/header';
import './home.css';

export default class Home extends Component {
 
    render() {
        return (
            <div className="home-container">
            <Header />
                <p className="hitconnect-moto" >Collaborate! Learn! Grow!!</p>
            </div>
        )
    }
}
