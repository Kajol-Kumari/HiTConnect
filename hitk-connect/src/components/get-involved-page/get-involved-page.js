import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import { GetInvolved } from './get-involved/get-involved'

export default class GetInvolvedPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GetInvolved />
                <Footer />
            </div>
        )
    }
}
