import React, {Component} from "react";
import {Table, Button, Navbar} from "react-bootstrap";
import axios from 'axios';
import Logo from '../Pages/volun--hero.png';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class VolunteerService extends Component {
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
        this.fetchVolunteersService()
    }

    fetchVolunteersService() {
        Promise.all([
            fetch(`http://localhost:8001/api/services/volunteerservices`),
        ])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                this.setState({services: res1.services});
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }

    onAccept = (e, userInfo) => {

        const id = Number(e.target.value);

        const data = JSON.stringify({id: userInfo.id})
        fetch('http://localhost:8001/api/services/complete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',       // receive json
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then(data => this.fetchVolunteersService())
    };


    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" className="app__bar">
                    <img className="app__logo" src={Logo}/>
                    <Link to="/volunteerpage">Services</Link> <span className="menu__divider">|</span>
                    <Link to="/completedservice">CompletedService</Link>
                </Navbar>
                <div style={{padding: 20}}>
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
                        this.state.services.map((member, index) => {
                            if(member.is_completed == false){
                                const rows = (<tr>
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
                                            onClick={(e) => {
                                                this.onAccept(e, member)
                                            }}
                                            value={'1'}
                                        >
                                            Complete
                                        </Button>
                                    </td>
                                </tr>)
                                return rows;
                            }

                            }
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
