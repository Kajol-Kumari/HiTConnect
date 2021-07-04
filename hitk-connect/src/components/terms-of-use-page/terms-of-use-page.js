import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import TermsOfUse from './terms-of-use/terms-of-use'

export default class TermsOfUsePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <TermsOfUse />
                <Footer />
            </div>
        )
    }
}
