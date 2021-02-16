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
          {/* <div className="notice-board-heading">Notice Board</div> */}
          <div className="notice-board-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </div>
        </div>
      </div>
    );
  }
}
