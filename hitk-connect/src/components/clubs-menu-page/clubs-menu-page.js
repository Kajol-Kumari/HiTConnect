import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import ClubsMenu from './clubs-menu/clubs-menu'

export default class ClubsMenuPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ClubsMenu />
                <Footer />
            </div>
        )
    }
}
