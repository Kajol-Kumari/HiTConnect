import React from "react";
import { Button2 } from "../../button/button";

const RegisteredUser = () => {
  return (
    <div className="not_found">
      <div className="error">
        <div className="pp-logo-container">
          <img className="error-logo" src="./images/success.png" alt="404" />
        </div>
        <p className="error-text">
          You are Successfully Registered!
        </p>
        <div className="error-content">
          You can now add feeds, blogs, projects amd many more things!
        </div>
        <a href="/">
          <Button2 label="Go Home!" type="submit" />
        </a>
      </div>
    </div>
  )
}

export default RegisteredUser;