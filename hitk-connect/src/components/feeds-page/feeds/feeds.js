import React, { useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./feeds.css";
toast.configure()

//state type
type State = {
  title: "string",
  description: "string",
  link: "string",
  imgFile: "File",
  data: "string"
};

const initialState: State = {
  title: "",
  description: "",
  link: "",
  imgFile: "",
  data: []
};

type Action =
  | { type: "setTitle", payload: string }
  | { type: "setDescription", payload: string }
  | { type: "setLink", payload: string }
  | { type: "setData", payload: [] }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "feedSuccess", payload: string }
  | { type: "feedFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setTitle":
      return {
        ...state,
        title: action.payload,
      };
    case "setDescription":
      return {
        ...state,
        description: action.payload,
      };
    case "setLink":
      return {
        ...state,
        link: action.payload,
      };
    case "setData":
      return {
        ...state,
        data: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

const Feeds = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  getEvents();
  useEffect(() => {
    // Show/Hide Functionality.
    if (state.title.trim() && state.description.trim() && state.link.trim() && state.imgFile && state.data) {
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
  }, [state.title, state.description, state.link, state.imgFile, state.data]);


  async function getEvents() {
    let result = await fetch("http://localhost:8080/event/getall", {
      method: 'GET'
    })
    result = await result.json();
    if (result.length >= 0) {
      // state.data = result
      dispatch({ type: "setData", payload: result })
      feedCard();
    } else {
      toast.error('Error Occurred!')
    }
  }
  async function handleFeedSubmit() {
    let token = JSON.parse(localStorage.getItem("token"));
    let result = await fetch("http://localhost:8080/Create_event", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: state.title,
        description: state.description,
        link: state.link,
        image: state.imgFile
      })
    });
    result = await result.json();
    if (result.status === 200) {
      getEvents();
      toast.success('Event Added Successfully!');
    } else {
      toast.error('Error Occurred!')
    }
  };

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
      return <div className="feed-form fchild1">
        <div className="signup-card">
          <h1 className="card-heading">Create Event!</h1>
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
                id="description"
                type="text"
                required="required"
                name="description"
                placeholder="description"
                className="inputSignup"
                onChange={(event) => { dispatch({ type: "setDescription", payload: event.target.value }) }}
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
                onChange={(event) => { dispatch({ type: "setLink", payload: event.target.value }) }}
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

  return (
    <div className="feedback-section">
      {renderEditBlock()}
      <div className="login-image feed-child2">
        <div className="feed-title">
          Events
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

export default Feeds;
