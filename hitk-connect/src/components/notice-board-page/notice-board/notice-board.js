import React, { Component } from "react";
import "./notice-board.css";

export default class NoticeBoard extends Component {
  render() {
    return (
      <div class="notice-board-div">
        <div className="notice-board-img">
            {/* <img src="./images/notice.png" alt="" /> */}
            Notice Board
        </div>
        <div className="notice-board-card">
          <div className="notice-board-content">
            <iframe scrolling="no" src="https://www.heritageit.edu/Notice.aspx"></iframe>
         </div>
        </div>
      </div>
    );
  }
}
