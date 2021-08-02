import React, { useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./projects.css";
toast.configure()

//state type
type State = {
  title: "string",
  content: "string",
  link: "string",
  imgFile: "File",
  data: "string"
};

const initialState: State = {
  title: "",
  content: "",
  link: "",
  imgFile: "",
  data: []
};

type Action =
  | { type: "setTitle", payload: string }
  | { type: "setContent", payload: string }
  | { type: "setUrl", payload: string }
  | { type: "setData", payload: [] }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "opportunitySuccess", payload: string }
  | { type: "opportunityFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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
    case "setUrl":
      return {
        ...state,
        link: action.payload,
      };
    case "setData":
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

const Projects = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  getProjects();
  useEffect(() => {
    // Show/Hide Functionality.
    if (state.title.trim() && state.content.trim() && state.link.trim() && state.imgFile && state.data) {
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
  }, [state.creator, state.title, state.content, state.imgFile, state.link, state.data]);

  // write the logic for submission here
  async function handleSubmit() {
    let token = JSON.parse(localStorage.getItem("token"));
    let result = await fetch("http://localhost:8080/feed/post", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: state.title,
        content: state.content,
        link: state.link,
        image: state.imgFile
      })
    });
    result = await result.json();
    if (result.status === 200) {
      getProjects();
      toast.success('Event Added Successfully!');
    } else {
      toast.error('Error Occurred!')
    }
  };

  async function getProjects() {
    let result = await fetch("http://localhost:8080/feed/get", {
      method: 'GET'
    })
    result = await result.json();
    if (result.length >= 0) {
      dispatch({ type: "setData", payload: result })
      feedCard();
    } else {
      toast.error('Error Occurred!')
    }
  }

  const feedCard = () => {
    let cards = [];
    const data = state.data;
    for (var i = 0; i < data.length; i++) {
      cards.push(
        <div className="feed-card-item">
          <div className="clickable-card">
            <div className="card-title">{data[i].title}</div>
            <img src={data[i].image} alt="dummy_img" width="200" height="200" />
            <div className="card-content">
              {data[i].description}
            </div>
            <div className="more-link">
              <a href={data[i].link} style={{ color: "#90EE90" }} target="_blank"
                rel="noopener noreferrer">
                Find More!
              </a>
            </div>
          </div>
        </div>
      )
    }
    if (cards.length > 0) {
      return cards;
    } else {
      return (<div>
        <h2>Loading ...</h2>
      </div>)
    }
  }

  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    state.imgFile = base64.toString()
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const renderEditBlock = () => {
    if (localStorage.getItem("token")) {
      return <div className="signup-form child1">
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
                onChange={(event) => { dispatch({ type: "setTitle", payload: event.target.value }) }}
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
                placeholder="description"
                className="inputSignup"
                onChange={(event) => { dispatch({ type: "setContent", payload: event.target.value }) }}
              />
              <i className="fas fa-book"></i>
            </div>

            <div className="signup-input">
              <input
                autoComplete="off"
                id="link"
                type="text"
                name="link"
                placeholder="url"
                className="inputSignup"
                onChange={(event) => { dispatch({ type: "setUrl", payload: event.target.value }) }}
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
                onChange={e => handleFileRead(e)}
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
    }
  }
  return (
    <div className="project-section">
      {renderEditBlock()}
      <div className="login-image feed-child2">
        <div className="feed-title">
          Projects &nbsp; Showcase
        </div>
        <div className="feed-list-card-wrapper">
          <div className="card-wrapper">
            {feedCard()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
