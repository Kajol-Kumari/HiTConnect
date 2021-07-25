import React, { useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./feeds.css";
import { useHistory } from "react-router-dom";
toast.configure()

//state type
type State = {
  creator: "string",
  title: "string",
  content: "string",
  tag: "string",
  imgFile: "File",
};

const initialState: State = {
  creator: "",
  title: "",
  content: "",
  tage: "",
  imgFile: "",
};

type Action =
  | { type: "setCreator", payload: string }
  | { type: "setTitle", payload: string }
  | { type: "setContent", payload: string }
  | { type: "setTag", payload: string }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "feedSuccess", payload: string }
  | { type: "feedFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setCreator":
      return {
        ...state,
        creator: action.payload,
      };
    case "setTitle":
      return {
        ...state,
        title: action.payload,
      };
    case "setContent":
      return {
        ...state,
        content: action.payload,
      };
    case "setTag":
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const Feeds = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Show/Hide Functionality.
    if (state.creator.trim() && state.title.trim() && state.content.trim() && state.tag.trim() && state.imgFile) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.creator, state.title, state.content, state.tag, state.imgFile]);

  async function handleFeedSubmit() {
    let result = await fetch("http://localhost:8080/feed/post", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: state.title, content: state.content,
        image: state.imgFile,
      })
    });
    result = await result.json();
    if (result.status === 200) {
      toast.success('Feed Added SuccessFully!');
      console.log(result);
      // route to a different page
      history.push('/');
    } else {
      toast.error('Error Occurred!')
    }
  };

  const renderEditBlock = () => {
    if(localStorage.getItem("token")) {
      return <div className="feed-form fchild1">
      <div className="signup-card">
        <h1 className="card-heading">Create Feed!</h1>
        <div className="inside-card">
          <div className="signup-input">
            <input
              autoComplete="off"
              id="text"
              type="text"
              required="required"
              name="creator"
              placeholder="creator"
              className="inputSignup"
            />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="signup-input">
            <input
              autoComplete="off"
              id="name"
              type="text"
              required="required"
              name="title"
              placeholder="title"
              className="inputSignup"
            />
            <i className="fas fa-check"></i>
          </div>

          <div className="signup-input">
            <input
              autoComplete="off"
              error={state.isError}
              id="content"
              type="text"
              required="required"
              name="content"
              placeholder="Content"
              className="inputSignup"
            />
            <i className="fas fa-book"></i>
          </div>

          <div className="signup-input">
            <input
              autoComplete="off"
              id="tag"
              type="text"
              name="tag"
              placeholder="tag"
              className="inputSignup"
            />
            <i className="fas fa-list"></i>
          </div>

          <div className="signup-file-input">
            <input
              autoComplete="off"
              id="imgFile"
              type="file"
              required="required"
              name="imgFile"
              placeholder="Select Image"
              className="inputSignup"
            />
            <i className="fas fa-file"></i>
          </div>
          <br />
          <div className="signup-input" style={{ textAlign: "center" }}>
            <button
              id="btn"
              className="login-btn main-btn main-btn-2"
              onClick={handleFeedSubmit}
              disabled={state.isButtonDisabled}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    }
  }
  return (
    <div className="feedback-section">
      { renderEditBlock() }
      <div className="login-image feed-child2">
        <div className="feed-title">
          Feeds
        </div>
        <div className="feed-list-card-wrapper">
          <div className="feed-card-item">
            <div className="clickable-card">
              <div className="card-title">Ghunghroo</div>
              <img src="./images/login.png" alt="dummy_img" />
              <div className="card-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>

          <div className="feed-card-item">
            <div className="clickable-card">
              <div className="card-title">Ghunghroo</div>
              <img src="./images/login.png" alt="dummy_img" />
              <div className="card-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>

          <div className="feed-card-item">
            <div className="clickable-card">
              <div className="card-title">Ghunghroo</div>
              <img src="./images/login.png" alt="dummy_img" />
              <div className="card-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
