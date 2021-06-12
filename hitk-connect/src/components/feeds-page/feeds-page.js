import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import Feeds from './feeds/feeds'

export default class FeedsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Feeds />
                <Footer />
            </div>
        )
    }
}
