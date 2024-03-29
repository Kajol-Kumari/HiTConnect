import React from "react";
import Carousel from "../carousel/carousel";
import "./blogs.css";

const Blogs = () => {

  const renderEditBlock = () => {
    if (localStorage.getItem("token")) {
      return <div className="create-blog">
        <div className="create-blog-btn">
          <a href="/create-blog" rel="noopener noreferrer">
            <div className="clickable-card">
              <i class="fa fa-plus" aria-hidden="true"></i> Create New Blog
            </div>
          </a>
        </div>
      </div>
    }
  }
  return (
    <div className="blogs-div">
      <div id="heading">
        <div id="title">Blogs</div>
      </div>
      <div className="blogs-content">
        {renderEditBlock()}
        <div className="blog-list">
          <div>
            <Carousel head="Blogs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
