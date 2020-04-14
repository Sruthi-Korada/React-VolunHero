import React, { Component } from "react";
import "./Application.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "components/login/index";
import Userpage from "components/Pages/user";

class Application extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Userpage" component={Userpage} />
        </div>
      </Router>
    );
  }
}
export default Application;
