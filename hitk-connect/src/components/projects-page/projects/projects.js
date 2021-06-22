import React, { useReducer, useEffect } from 'react';
import "./projects.css";

//state type
type State = {
  title: "string",
  description: "string",
  url: "string",
  imgFile: "File",
};

const initialState: State = {
  title: "",
  description: "",
  url: "",
  imgFile: "",
};

type Action =
  | { type: "setTitle", payload: string }
  | { type: "setDescription", payload: string }
  | { type: "setUrl", payload: string }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "opportunitySuccess", payload: string }
  | { type: "opportunityFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setTitle":
      return {
        ...state,
        creator: action.payload,
      };
    case "setDescription":
      return {
        ...state,
        title: action.payload,
      };
        case "setUrl":
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

const Projects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Show/Hide Functionality.
    if (state.title.trim() && state.description.trim() && state.url.trim() && state.imgFile) {
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

    // write the logic for submission here
  const handleSubmit = () => {
  };
  return (
    <div className="login-section">
      <div className="signup-form child1">
        <div className="signup-card">
          <h1 className="card-heading">Add Project!</h1>
          <div className="inside-card">
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
                name="description"
                placeholder="description"
                className="inputSignup"
              />
              <i className="fas fa-book"></i>
            </div>

            <div className="signup-input">
              <input
                autoComplete="off"
                id="tag"
                type="uri"
                name="link"
                placeholder="link"
                className="inputSignup"
              />
              <i className="fas fa-link"></i>
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
                onClick={handleSubmit}
                disabled={state.isButtonDisabled}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-image feed-child2">
        <div className="feed-title">
            Projects &nbsp; Showcase
        </div>
      </div>
      
    </div>
  );
};

export default Projects;