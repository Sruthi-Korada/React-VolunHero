import React, {Component} from "react";
import NProgress from 'nprogress';
import {Table, Navbar, Nav} from "react-bootstrap";
import Logo from '../Pages/volun--hero.png';
import {Link} from "react-router-dom";
import LogoutIcon from './logout.png';
import Footer from '../commons/Footer';



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
        NProgress.start();
        this.apicall()
    }

    apicall() {
        Promise.all([
            fetch(`http://localhost:8001/api/services/volunteerservices`),

        ])
            .then(([res1]) => {
                return Promise.all([res1.json()]);
            })
            .then(([res1]) => {
                NProgress.done();
                this.setState({services: res1.services});
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
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                       <div className="delete__container">
                        <button className="delete delete__align" onClick={()=>{
                            this.setState({redirectTo: true})
                        }}><img src={LogoutIcon} alt="" />SignOff</button>
                        </div>
                    </Nav>
                </Navbar>
                <div style={{padding: 20}}>
                    <Table responsive className="services__table">
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

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.services &&
                        this.state.services.map((member, index) => {
                                if (member.is_completed == true) {
                                    const rows = (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{member.name}</td>
                                            <td className="services__header">{member.description}</td>
                                            <td>{member.category}</td>
                                            <td>{member.address}</td>
                                            <td>{member.city}</td>
                                            <td>{member.country}</td>
                                            <td>{member.phone}</td>

                                        </tr>
                                    )
                                    return rows;
                                }
                            }
                        )}
                        </tbody>
                    </Table>
                </div>
                <Footer/>
            </div>
        );
    }
}
