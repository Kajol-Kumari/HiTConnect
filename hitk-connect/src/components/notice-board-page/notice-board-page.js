import React, { Component } from 'react'
import Footer from '.././template/footer/footer'
import Header from '.././template/header/header'
import NoticeBoard from './notice-board/notice-board'

export default class NoticeBoardPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <NoticeBoard />
                <Footer />
            </div>
        )
    }
}
