import React from "react";
import "./get-involved.css";

export const GetInvolved = () => {
  const arrayCards = [
    [
      "Report Issues",
      "If you came across something that isn't woring properly on this website, feel free to open up an issue for the same",
    ],
    [
      "Code Fixes",
      "If you find any bug/inconsistency in our codebase, feel free to open up an issue for the same",
    ],
    [
      "Improve Documentation",
      "If you want us to improve our documentation, feel free to open up an issue for the same",
    ],
    [
      "New Feature",
      "If you think we are missing any feature, or having nay feature can make your the website better. Let us know by opening up an issue for the same",
    ],
    [
      "Contribute",
      "If you can help up in solving the openend issue, feel free to claim any openend issue and come up with a PR",
    ],
  ];
  return (
    <main id="main">
      <div id="hero">
        <div id="heading">
          <div id="title">
            Get Involved!
          </div>
        </div>
      </div>
      <div id="all-cards">
        {arrayCards.map((element, i) => {
          return (
            <div
              className="card-item"
            >
              <a
                href="https://github.com/Kajol-Kumari/HiTConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="clickable-card"
                >
                  <div
                    className="card-title"
                  >
                    {element[0]}
                  </div>
                  <div className="card-content">{element[1]}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div id="hero">
        <div id="heading">
          <div id="title">
            Our Team!
            </div>
        </div>
      </div>
      <div className="container">
        <div className="contributors">
          <a href="https://github.com/Kajol-Kumari" rel="noreferrer" target="_blank"><img src="https://avatars.githubusercontent.com/u/44888949?v=4" alt="kajol" title="Kajol-Kumari" width="150" height="150" /></a> &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/rishikesh7677" rel="noreferrer" target="_blank"><img src="https://avatars.githubusercontent.com/u/36738250?v=4" alt="rishi" title="RishiKesh" width="150" height="150" /></a> &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/sandeep-hit" rel="noreferrer" target="_blank"><img src="https://avatars.githubusercontent.com/u/43853965?v=4" alt="sandeep" title="Sandeep Choudhary" width="150" height="150" /></a> &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Nishu55" rel="noreferrer" target="_blank"><img src="https://avatars.githubusercontent.com/u/68487596?v=4" alt="nishant" title="Nishant Ranjan" width="150" height="150" /></a>
        </div>
      </div>
    </main>
  );
};
