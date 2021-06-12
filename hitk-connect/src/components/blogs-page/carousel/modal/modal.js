import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./modal.css";

export function Modals(props) {
  let dark = props.theme;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div
            className={
              dark
                ? "modals-dark modals"
                : "modals-light modals"
            }
          >
            <h1
              className={
                dark
                  ? "mod_head-dark mod_head"
                  : "mod_head-light mod_head"
              }
            >
              <span className="heading">{props.data.head}</span>
              <span
                onClick={props.handleClose}
                className={
                  dark
                    ? "close-btn-dark close-btn"
                    : "close-btn-light close-btn"
                }
              >
                <i class="fas fa-times"></i>
              </span>
            </h1>
            <div className="main-cont">
              <img
                src={props.data.img}
                className="image"
                alt="dummy_img"
              />
              <div className="cont">{props.data.desc}</div>
            </div>
            <h1
              className={
                dark
                  ? "link-dark link"
                  : "link-light link"
              }
            >
              Link
            </h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
