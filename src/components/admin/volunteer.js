import React, { Component } from "react";
<<<<<<< HEAD
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
        console.log("thisis the email jasmineeblahblah", users[0].email);
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
                <th>Name</th>
                <th>Address</th>
                <th>services</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.services.map((member) => (
                <tr key={member.id}>
                  <td>{member.name} </td>
                  <td>{member.address} </td>
                  <td>{member.description}</td>
                  <td>{member.category}</td>
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
=======
import { Table, Button, Navbar } from "react-bootstrap";
import axios from 'axios';
export default class volunteerpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            users: {},
            categories: {},
            isDataFetched: false
        };
    }

    componentDidMount() {
     this.apicall()
    }
    apicall(){
        Promise.all([
            fetch(`http://localhost:8001/api/services/withuserinfo`),
            //fetch("http://localhost:8001/services"),
        ])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                this.setState({ services: res1.services });
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }

    onAccept = (e, userInfo) => {

        const id = Number(e.target.value);

        const data = JSON.stringify({user_id:id , id: userInfo.id })
        fetch('http://localhost:8001/api/services/accepted', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',       // receive json
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then(data => this.apicall())
    };

    onComplete = () => {
        axios.get(`http://localhost:8001/api/services/volunteerservices`)
            .then((res) =>{
                console.log(res)
            })
    };

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="">@VolunHero</Navbar.Brand>
                </Navbar>
                <div style={{ padding: 20 }}>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Category</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.services &&
                        this.state.services.map((member, index) => (
                            <tr key={member.id}>
                                <td>{index + 1}</td>
                                <td>{member.name}</td>
                                <td>{member.description}</td>
                                <td>{member.category}</td>
                                <td>{member.address}</td>
                                <td>{member.city}</td>
                                <td>{member.country}</td>
                                <td>{member.phone}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={ (e)=>{
                                            this.onAccept(e, member)
                                        }}
                                        value={'1'}
                                    >
                                        Accept
                                    </Button>
                                    {"  "}
                                    <Button
                                        value={'1'}
                                        variant="secondary"
                                        size="sm"
                                        onClick={this.onComplete}
                                    >
                                        Complete
                                    </Button>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
>>>>>>> 532317f233314260e95b651a99d437b6a4eeb521
}
