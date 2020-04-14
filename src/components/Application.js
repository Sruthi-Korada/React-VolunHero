<<<<<<< HEAD
import React, { Component } from "react";
import "./Application.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "components/login/index";
import Userpage from "components/Pages/user";
=======
import React, { Component } from 'react';
import './Application.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "components/login/index"
import Userpage from "components/Pages/user"
import volunteerpage from "components/admin/volunteer"
>>>>>>> fbbe31a5d7d9c99ef0013d804d1cf36fb54ba76e

class Application extends React.Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Userpage" component={Userpage} />
        </div>
=======
      <div>
      <Route exact path='/' component = {Homepage}/>
      <Route exact path='/Userpage' component = {Userpage}/>
      <Route exact path='/volunteerpage' component ={volunteerpage}/>
      </div>
>>>>>>> fbbe31a5d7d9c99ef0013d804d1cf36fb54ba76e
      </Router>
    );
  }
}
export default Application;
