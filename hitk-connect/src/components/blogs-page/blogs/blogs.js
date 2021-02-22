import React, { Component } from "react";
import Carousel from "../carousel/carousel";
import "./blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogs-div">
        <div id="heading">
          <div id="title">Blogs</div>
        </div>
        <div className="blogs-content">
          <div className="create-blog">
            <div className="create-blog-btn">
              <a href="/" rel="noopener noreferrer">
                <div className="clickable-card">
                  <i class="fa fa-plus" aria-hidden="true"></i> Create New Blog
                </div>
              </a>
            </div>
          </div>
          <div className="blog-list">
            <div>
              <Carousel head="Blogs" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
