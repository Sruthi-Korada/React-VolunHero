import React, { Component } from 'react';
//import './Application.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "components/login/index"
import Userpage from "components/Pages/user"
import volunteer from "components/admin/volunteer";
import VolunteerService from "./admin/VolunteerService";
import CompletedService from "./admin/CompletedService";

class Application extends React.Component {
  render(){
    return(
      <Router>
      <div>
      <Route exact path='/' component = {Homepage}/>
      <Route exact path='/Userpage' component = {Userpage}/>
      <Route exact path='/volunteerpage' component ={volunteer}/>
      <Route exact path='/vounteerservice' component={VolunteerService} />
      <Route exact path='/completedservice' component={CompletedService} />
      </div>
      </Router>
    )
  }
}
export default Application;