import React, { Component } from "react";
import NProgress from 'nprogress';
import { Table, Button, Navbar, Nav } from "react-bootstrap";
import Logo from '../Pages/volun--hero.png';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import LogoutIcon from './logout.png'
import './table.scss'
import Footer from '../commons/Footer';
export default class volunteerpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            users: {},
            categories: {},
            isDataFetched: false,
            redirectTo: false
        };
    }

    componentDidMount() {
        NProgress.start();
     this.apicall()
    }
    apicall(){
        Promise.all([
            fetch(`http://localhost:8001/api/services/withuserinfo`),
        ])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                this.setState({ services: res1.services });
                NProgress.done();
            })
            .catch((err) => {
                console.log("caught it!", err);
            });
    }



    onAccept = (e, userInfo) => {

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
            .then(data =>this.apicall())
    };


    render() {
        if(this.state.redirectTo == true){
            return (<Redirect to="/" />)
        }
        return (
            <div>
                <Navbar bg="primary" variant="dark" className="app__bar">
                    <img className="app__logo" src={Logo}/>
                    <Link to="/vounteerservice">Accepted Service</Link> <span className="menu__divider">|</span>
                    <Link to="/completedservice">Completed Service</Link>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                       <div className="delete__container">
                        <button className="delete delete__align" onClick={()=>{
                            this.setState({redirectTo: true})
                        }}><img src={LogoutIcon} alt="" />SignOff</button>
                        </div>
                    </Nav>
                </Navbar>
                <div style={{ padding: 20 }}>
                    <Table  className="services__table" responsive>
                        <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th className="services__header">Services</th>
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
                                <td className="services__header">{member.description}</td>
                                <td>{member.category}</td>
                                <td>{member.address}</td>
                                <td>{member.city}</td>
                                <td>{member.country}</td>
                                <td>{member.phone}</td>
                                <td>
                                    <Button
                                    className="button_admin_cta"
                                        variant="primary"
                                        size="sm"
                                        onClick={ (e)=>{
                                            this.onAccept(e, member)
                                        }}
                                        value={'1'}
                                    >
                                        Accept
                                    </Button>


                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
                <Footer />
            </div>
        );
    }
}
