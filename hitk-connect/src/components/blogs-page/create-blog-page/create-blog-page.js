import React, { Component } from 'react'
import Footer from '../../template/footer/footer'
import Header from '../../template/header/header'
import CreateBlog from './create-blog/create-blog'

export default class CreateBlogPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreateBlog />
                <Footer />
            </div>
        )
    }
}
