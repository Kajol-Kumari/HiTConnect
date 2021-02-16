import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Home from '../home'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Home />
                <Footer />
            </div>
        )
    }
}
