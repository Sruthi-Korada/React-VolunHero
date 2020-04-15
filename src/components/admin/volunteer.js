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

  componentDidMount() {
    let self = this;
    console.log("reloaded");
    Promise.all([
      fetch(`http://localhost:8001/api/services/`),
      fetch(`http://localhost:8001/api/users/`),
      fetch(`http://localhost:8001/api/categories/`),
    ])
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log(response.data);
        return response.data.services;
      })
      .then(function (data) {
        self.setState({ services: data });
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  }

  // useEffect(() => {
  // let self = this;
  //   Promise.all([
  //     axios.get("http://localhost:8001/api/services/"),
  //     axios.get("http://localhost:8001/api/users/"),
  //     axios.get("http://localhost:8001/api/categories/"),
  //   ]).then((all) => {
  //     this.state((state) => ({
  //       ...state,
  //       services: all[0].data,
  //       users: all[1].data,
  //       categories: all[2].data,
  //     }));
  //   });
  // }, []);
  //     if (response.status >= 400) {
  //       throw new Error("Bad response from server");
  //     }
  //     console.log(response.data);
  //     return response.data.services;
  //   })
  //   .then(function (data) {
  //     self.setState({ services: data });
  //   })
  //   .catch((err) => {
  //     console.log("caught it!", err);

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
                <th>user_id</th>
                <th>services</th>
                <th>category_id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.services.map((member) => (
                <tr key={member.id}>
                  <td>{member.user_id} </td>
                  <td>{member.description}</td>
                  <td>{member.category_id}</td>
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
