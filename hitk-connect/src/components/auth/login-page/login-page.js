import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Navbar from '../../template/navbar/navbar'
import Login from '../login/login'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                <Footer />
            </div>
        )
    }
}
