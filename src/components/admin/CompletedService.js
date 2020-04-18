import React, { Component } from "react";
import { Table, Button, Navbar } from "react-bootstrap";
import axios from 'axios';
import Logo from '../Pages/volun--hero.png';
import {Link} from "react-router-dom";

export default class CompletedService extends Component {
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
            fetch(`http://localhost:8001/api/services/volunteerservices`),
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

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" className="app__bar">
                    <img className="app__logo" src={Logo}/>
                    <Link to="/volunteerpage">Services</Link> <span className="menu__divider">|</span>
                    <Link to="/vounteerservice">Accepted Services</Link>
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

                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
