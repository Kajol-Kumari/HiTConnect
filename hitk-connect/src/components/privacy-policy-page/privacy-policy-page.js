import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import PrivacyPolicy from './privacy-policy/privacy-policy'

export default class PrivacyPolicyPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PrivacyPolicy />
                <Footer />
            </div>
        )
    }
}
