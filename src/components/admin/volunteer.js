import React, { Component } from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
export default class volunteerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      users: {},
      categories: {},
    };
  }
  setAccept(){

  }
  componentDidMount() {
    console.log("reloaded");
    Promise.all([
      fetch(`http://localhost:8001/api/services/withuserinfo`),
      fetch(`http://localhost:8001/api/users/`),
      fetch(`http://localhost:8001/api/categories/`),
    ])
      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([res1, res2, res3, res4]) => {
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        // console.log(res1, res2, res3);
        // set state in here
        console.log(res1.services);
        const services = res1.services;
        const users = res2.users;
        console.log("thisis the email jasmineeblahblah", users[4].email);
        const categories = res3.categories;
        this.setState({ services, users, categories });
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="banner">
          <header className="logo">
            <h1>@VolunHero</h1>
          </header>
        </div>
        <div className="panel panel-default p50 uth-panel">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>name</th>
                <th>services</th>
                <th>category_id</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
                <th>PhoneNumber</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.services.map((member) => (
                <tr key={member.id}>
                  <td>{member.name} </td>
                  <td>{member.description}</td>
                  <td>{member.category_id}</td>
                  <td>{member.address}</td>
                  <td>{member.city}</td>
                  <td>{member.country}</td>
                  <td>{member.phone}</td>
                  <td>
                    <a>Accept</a>|<a>Complete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}