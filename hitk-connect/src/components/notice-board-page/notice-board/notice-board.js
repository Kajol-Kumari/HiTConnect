import React, { Component } from "react";
import "./notice-board.css";

export default class NoticeBoard extends Component {
  render() {
    return (
      <div className="notice-board-div">
        <div className="notice-board-img">
            Notice Board
        </div>
        <div className="notice-board-card">
          <div className="notice-board-content">
            <iframe id="notice-frame" title="Notice Board" scrolling="no" src="https://www.heritageit.edu/Notice.aspx"></iframe>
         </div>
        </div>
      </div>
    );
  }
}
