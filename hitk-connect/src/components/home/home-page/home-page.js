import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Home from '../home'
import NoticeBoard from '../notice-board/notice-board'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Home />
                <NoticeBoard />
                <Footer />
            </div>
        )
    }
}
