import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Navbar from '../../template/navbar/navbar'
import HitkTechCommunity from './hitk-tech-community/hitk-tech-community'

export default class HitkTechCommunityPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HitkTechCommunity />
                <Footer />
            </div>
        )
    }
}
