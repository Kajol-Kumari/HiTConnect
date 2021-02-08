import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Navbar from '../../template/navbar/navbar'
import Signup from './signup/signup'

export default class SignupPage extends Component {
    render() {
        return (
            <div>
                <div>
                <Navbar />
                <Signup />
                <Footer />
            </div>
            </div>
        )
    }
}
