import React, { Component } from "react";
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
                  <i class="fa fa-plus" aria-hidden="true"></i> Create Blog
                </div>
              </a>
            </div>
          </div>
          <div className="blog-list">
              {/* add carousel having 3-5 cards */}
              {/* Add a button below that will contain the link to all blogs page */}
          </div>
        </div>
      </div>
    );
  }
}
