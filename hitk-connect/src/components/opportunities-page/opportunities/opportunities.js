import React, { useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./opportunities.css";
toast.configure()

//state type
type State = {
  title: "string",
  content: "string",
  link: "string",
  data: "string"
};

const initialState: State = {
  title: "",
  content: "",
  link: "",
  data: []
};

type Action =
  | { type: "setTitle", payload: string }
  | { type: "setContent", payload: string }
  | { type: "setLink", payload: string }
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

const Opportunities = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  getPosts();
  useEffect(() => {
    // Show/Hide Functionality.
    if (state.title.trim() && state.content.trim() && state.link.trim() && state.data) {
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
  }, [state.title, state.content, state.link, state.data]);

  async function getPosts() {
    let result = await fetch("http://localhost:8080/notice/all", {
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

  // write the logic for submission here
  async function handleSubmit() {
    let token = JSON.parse(localStorage.getItem("token"));
    let result = await fetch("http://localhost:8080/notice/post", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: state.title,
        content: state.content,
        link: state.link
      })
    });
    result = await result.json();
    if (result.status === 200) {
      getPosts();
      toast.success('Opportunity Added Successfully!');
    } else {
      toast.error('Error Occurred!')
    }
  };

  const feedCard = () => {
    let cards = [];
    const data = state.data;
    for (var i = 0; i < data.length; i++) {
      cards.push(
        <div className="feed-card-item">
          <div className="clickable-card">
            <div className="card-title">{data[i].title}</div>
            <div className="card-content">
              {data[i].content}
            </div>
            <div className="more-link">
              <a href={data[i].link} style={{ color: "#90EE90" }} target="_blank"
                rel="noopener noreferrer">
                Register/Find More!
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


  const renderEditBlock = () => {
    if (localStorage.getItem("token")) {
      return <div className="feed-form fchild1">
        <div className="signup-card">
          <h1 className="card-heading">New Opportunity!</h1>
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
                placeholder="opportunity URL"
                className="inputSignup"
                onChange={(event) => { dispatch({ type: "setLink", payload: event.target.value }) }}
              />
              <i className="fas fa-link"></i>
            </div>
            <br />
            <div className="signup-input" style={{ textAlign: "center" }}>
              <button
                id="btn"
                className="login-btn main-btn main-btn-2"
                onClick={handleSubmit}
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
    <div className="opportunity-section">
      {renderEditBlock()}
      <div className="login-image feed-child2">
        <div className="feed-title">
          Opportunities
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

export default Opportunities;
