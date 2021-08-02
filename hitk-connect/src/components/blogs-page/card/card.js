import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Modals } from "../carousel/modal";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

import "./card.css";

function deleteCard(id) {
  const cardElement = document.getElementById(id);
  cardElement.classList.add("gonnaRemove");
  setTimeout(() => cardElement.remove(), 1000);
}
export function Card(props) {
  let dark = props.theme;
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = (s, h, i) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };
  const isSuperAdmin = useSelector((state) => state.isSuperAdmin);

  return (
    <div id={props.id} className="card-container">
      <Modals theme={dark} open={open} handleClose={handleClose} data={data} />
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div
          className={
            dark
              ? `$"card-item-dark" $"card-item"`
              : `$"card-item-light" $"card-item"`
          }
          onClick={handleClick}
        >
          <div className="clickable-card">
            <div className="card-title">{props.project.head}</div>
            <div className="card-content">
              {props.project.desc.substring(0, 400)}...
            </div>
          </div>
        </div>

        <div
          className={
            dark
              ? `$"card-item-dark" $"card-item"`
              : `$"card-item-light" $"card-item"`
          }
          onClick={handleClick}
        >
          <div className="clickable-card">
            {isSuperAdmin ? (
              <div className="admin-controls">
                <IconButton
                  className="icon-button"
                  onClick={props.handler}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  className="icon-button"
                  onClick={() => deleteCard(props.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            ) : null}
            <div
              className={
                dark
                  ? `$"card-title-dark" $"card-title"`
                  : `$"card-title-light" $"card-title"`
              }
              style={{ marginTop: "60px", marginBottom: "50px" }}
            >
              {props.project.title}
            </div>
            <button
              onClick={() =>
                handleOpen(
                  props.project.desc,
                  props.project.title,
                  props.project.link
                )
              }
              className={
                dark
                  ? `$"but-dark" $"but"`
                  : `$"but-light" $"but"`
              }
            >
              View Details
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
