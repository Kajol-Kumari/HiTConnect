import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Home from '../home'
import Motive from '../motive/motive'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Home />
                <Motive />
                <Footer />
            </div>
        )
    }
}
