import React, { useReducer, useEffect, useState, useRef } from "react";
import "./signup.css";

//state type
type State = {
  username: "string",
  password: "string",
  confirmpassword: "string",
  isButtonDisabled: "boolean",
  helperText: "string",
  isError: "boolean",
};

const initialState: State = {
  username: "",
  password: "",
  confirmpassword: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername", payload: string }
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
        username: action.payload,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hidePassword, setHidePassword] = useState(false);
  const[hideConfirmPassword, setHideConfirmPassword] = useState(false);
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
    if (state.username.trim() && state.password.trim()) {
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
  }, [state.username, state.password, hidePassword, hideConfirmPassword]);

  const handleLogin = () => {
    if (state.username === "abc@email.com" && state.password === "password") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
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
                onChange={handleUsernameChange}
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
                name="username"
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
                onClick={handleLogin}
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
