import React, { useReducer, useEffect, useState, useRef } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

//state type
type State = {
  email: "email",
  name: "string",
  password: "string",
  confirmpassword: "string",
  isButtonDisabled: "boolean",
  helperText: "string",
  isError: "boolean",
};

const initialState: State = {
  email: "",
  name: "",
  password: "",
  confirmpassword: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername", payload: string }
  | { type: "setEmail", payload: string }
  | { type: "setPassword", payload: string }
  | { type: "setConfirmPassword", payload: string }
  | { type: "setIsButtonDisabled", payload: boolean }
  | { type: "loginSuccess", payload: string }
  | { type: "loginFailed", payload: string }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        name: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
      case "setConfirmPassword":
        return {
          ...state,
          confirmpassword: action.payload,
        };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return {
        ...state,
        isError: true,
      };
  }
};

const Signup = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
  const passwordInput = useRef("password");
  const confirmPasswordInput = useRef("confirmpassword");

  useEffect(() => {
    // Show/Hide Functionality.
    hidePassword
      ? (passwordInput.current = "text")
      : (passwordInput.current = "password");

      hideConfirmPassword
        ? (confirmPasswordInput.current = "text")
        : (confirmPasswordInput.current = "password");
    if (state.email.trim() && state.name.trim() && state.password.trim() && state.confirmpassword.trim()) {
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
  }, [state.email, state.name, state.password, hidePassword, hideConfirmPassword]);

  async function handleSignup() {
    if(state.password === state.confirmpassword){
      let result = await fetch("http://localhost:8080/auth/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({"email": state.email, name: state.name, password:state.password})
    });
    result = await result.json();
    if(result.status === 200){
      toast.success('Registration Successful!')
      history.push('/login');
    } else {
      toast.error('Already Registered!')
    }
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect name or password",
      });
      toast.error('Password Does not match!')
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleSignup();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };const handleConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setConfirmPassword",
      payload: event.target.value,
    });
  };
  return (
    <div className="login-section">
      <div className="login-image child1">
        <img
          src="./images/login.png"
          alt="login-illustration"
        />
      </div>
      <div className="signup-form child2">
        <div className="signup-card">
          <h1 className="card-heading">Welcome!</h1>
          <div className="inside-card">
            <div className="signup-input">
              <input
                autoComplete="off"
                error={state.isError}
                id="email"
                type="email"
                required="required"
                name="email"
                placeholder="Email"
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                className="inputSignup"
              />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="signup-input">
              <input
                autoComplete="off"
                error={state.isError}
                id="name"
                type="text"
                required="required"
                name="name"
                placeholder="Name"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
                className="inputSignup"
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="signup-input">
              <input
                error={state.isError}
                id="password"
                required="required"
                name="password"
                type={passwordInput.current}
                placeholder="Password"
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className="inputSignup"
              />
              <i
                className={hidePassword ? "fa fa-eye" : "fa fa-eye-slash"}
                onClick={() => setHidePassword(!hidePassword)}
              ></i>
            </div>
            <div className="signup-input">
              <input
                error={state.isError}
                id="confirm-password"
                required="required"
                name="confirm-password"
                type={confirmPasswordInput.current}
                placeholder="Confirm Password"
                onChange={handleConfirmPasswordChange}
                onKeyPress={handleKeyPress}
                className="inputSignup"
              />
              <i
                className={hideConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
              ></i>
            </div>
            <div className="signup-input" style={{ textAlign: "center" , marginTop: "-20px"}}>
              Already have an account? <a href="/login">Log In</a> here!!
            </div> <br />
            <div className="signup-input" style={{ textAlign: "center" }}>
              <button
                id="btn"
                className="login-btn main-btn main-btn-2"
                onClick={handleSignup}
                disabled={state.isButtonDisabled}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
