import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ResgisteredUser from "./registered/registered";

export default class RegisteredUserPage extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <ResgisteredUser />
            <Footer />
        </div>
    )
  }
}
