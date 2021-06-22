import React, { Component } from 'react'
import Footer from '../template/footer/footer'
import Navbar from '../template/navbar/navbar'
import Projects from './projects/projects'

export default class ProjectsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Projects />
                <Footer />
            </div>
        )
    }
}
