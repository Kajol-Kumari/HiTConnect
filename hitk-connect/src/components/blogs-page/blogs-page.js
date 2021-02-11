import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import Blogs from './blogs/blogs'

export default class BlogsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Blogs />
                <Footer />
            </div>
        )
    }
}
