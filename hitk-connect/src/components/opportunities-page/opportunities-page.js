import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import Opportunities from './opportunities/opportunities'

export default class OpportunitiesPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Opportunities />
                <Footer />
            </div>
        )
    }
}
